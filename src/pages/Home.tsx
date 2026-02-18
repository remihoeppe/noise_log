import Log from './Log';
import roomsData from '../data/room';
import { useState } from 'react';

const Home = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleSelectedOption = (optionName: string) => {
        setSelectedOption(optionName);
    };
    return (
        <>
            <Log optionsData={roomsData} onSelected={handleSelectedOption} />
            {selectedOption && <p>Selected option: {selectedOption}</p>}
        </>
    );
};

export default Home;
