import { useState } from 'react';
import RoomButton from '../components/buttons/RoomButton';

const Log = ({
    optionsData,
}: {
    optionsData: { id: number; name: string }[];
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectedOption = (option: string) => {
        setSelectedOption(option);
    };
    return (
        <>
            <p>Select an option:</p>
            {selectedOption && <p>Selected option: {selectedOption}</p>}
            {!selectedOption && (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {optionsData.map((option) => (
                        <RoomButton
                            key={option.id}
                            onClick={() => handleSelectedOption(option.name)}>
                            {option.name}
                        </RoomButton>
                    ))}
                </div>
            )}
        </>
    );
};

export default Log;
