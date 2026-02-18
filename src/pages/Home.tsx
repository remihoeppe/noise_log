import Log from './Log';
import roomsData from '../data/room';
import { useState } from 'react';
import NoiseType from '../data/noiseType';

const Home = () => {
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
    const [selectedNoiseType, setSelectedNoiseType] = useState<string | null>(
        null,
    );

    const noiseTypeData = Object.values(NoiseType).map((noiseType) => ({
        id: noiseType,
        name: noiseType,
    }));

    const handleSelectedOption = (
        optionName: string,
        setter: (optionName: string) => void,
    ) => {
        setter(optionName);
    };
    return (
        <>
            {/* Selection of current room */}
            {!selectedRoom && (
                <Log
                    optionsData={roomsData}
                    onSelected={(optionName) =>
                        handleSelectedOption(optionName, setSelectedRoom)
                    }
                />
            )}
            {selectedRoom && <p>Selected room: {selectedRoom}</p>}

            {/* Selection of noise type */}
            {!selectedNoiseType && (
                <Log
                    optionsData={noiseTypeData}
                    onSelected={(optionName) =>
                        handleSelectedOption(optionName, setSelectedNoiseType)
                    }
                />
            )}
            {selectedNoiseType && (
                <p>Selected noise type: {selectedNoiseType}</p>
            )}
            {selectedNoiseType && (
                <Log
                    optionsData={noiseTypeData}
                    onSelected={(optionName) =>
                        handleSelectedOption(optionName, setSelectedNoiseType)
                    }
                />
            )}
        </>
    );
};

export default Home;
