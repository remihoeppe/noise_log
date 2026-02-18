import { useState } from 'react';
import RoomButton from '../components/buttons/RoomButton';
import roomsData from '../data/room';
import NoiseType from '../data/noiseType';

const Log = () => {
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
    const [noiseType, setNoiseType] = useState<string | null>(null);
    const handleRoomClick = (room: string) => {
        setSelectedRoom(room);
        setNoiseType(null);
    };
    const handleNoiseTypeClick = (noiseType: string) => {
        setNoiseType(noiseType);
    };
    return (
        <>
            <h2>Logging Noise</h2>
            <p>Select a room to log noise</p>
            {selectedRoom && <p>Selected room: {selectedRoom}</p>}
            {!selectedRoom && (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {roomsData.map((room) => (
                        <RoomButton
                            key={room.id}
                            onClick={() => handleRoomClick(room.name)}>
                            {room.name}
                        </RoomButton>
                    ))}
                </div>
            )}

            <p>Select a type of noise to log</p>
            {noiseType && <p>Selected noise type: {noiseType}</p>}
            {!noiseType && (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {Object.values(NoiseType).map((noiseType: string) => (
                        <RoomButton
                            key={noiseType as keyof typeof NoiseType}
                            onClick={() =>
                                handleNoiseTypeClick(noiseType as string)
                            }>
                            {noiseType}
                        </RoomButton>
                    ))}
                </div>
            )}
        </>
    );
};

export default Log;
