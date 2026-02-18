import Log from './Log';
import roomsData from '../data/room';
import { useState } from 'react';

const Home = () => {
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
    const handleSelectedOption = (
        optionName: string,
        setter: (optionName: string) => void,
    ) => {
        setter(optionName);
    };
    return (
        <>
            {!selectedRoom && (
                <Log
                    optionsData={roomsData}
                    onSelected={(optionName) =>
                        handleSelectedOption(optionName, setSelectedRoom)
                    }
                />
            )}
            {selectedRoom && <p>Selected room: {selectedRoom}</p>}
        </>
    );
};

export default Home;
