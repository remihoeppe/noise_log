import ToggleButton from '@mui/material/ToggleButton';
import RoomButton from '../components/buttons/RoomButton';

const Log = ({
    optionsData,
    onSelected,
    toggleable = false,
}: {
    optionsData: { id: number | string; name: string }[];
    onSelected: (optionName: string) => void;
    toggleable?: boolean;
}) => {
    const handleSelectedOption = (optionName: string) => {
        onSelected(optionName);
    };

    return (
        <>
            <p>Select an option:</p>
            <div className="grid grid-cols-3 gap-4 p-4">
                {optionsData.map((option) =>
                    !toggleable ? (
                        <RoomButton
                            key={option.id}
                            onClick={() => handleSelectedOption(option.name)}>
                            {option.name}
                        </RoomButton>
                    ) : (
                        <ToggleButton
                            key={option.id}
                            value={option.name}
                            onClick={() => handleSelectedOption(option.name)}>
                            {option.name}
                        </ToggleButton>
                    ),
                )}
            </div>
        </>
    );
};

export default Log;
