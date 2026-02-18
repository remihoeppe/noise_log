import { useState } from 'react';
import RoomButton from '../components/buttons/RoomButton';

const Log = ({
    optionsData,
    onSelected,
}: {
    optionsData: { id: number; name: string }[];
    onSelected: (optionName: string) => void;
}) => {
    const handleSelectedOption = (optionName: string) => {
        onSelected(optionName);
    };

    return (
        <>
            <p>Select an option:</p>
            <div className="grid grid-cols-3 gap-4 p-4">
                {optionsData.map((option) => (
                    <RoomButton
                        key={option.id}
                        onClick={() => handleSelectedOption(option.name)}>
                        {option.name}
                    </RoomButton>
                ))}
            </div>
        </>
    );
};

export default Log;
