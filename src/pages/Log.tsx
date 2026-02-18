import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import RoomButton from '../components/buttons/RoomButton';

const Log = ({
    optionsData,
    onSelected,
    onSelectedMultiple,
    selected = [],
    toggleable = false,
}: {
    optionsData: { id: number | string; name: string }[];
    onSelected: (optionName: string) => void;
    onSelectedMultiple?: (optionNames: string[]) => void;
    selected?: string[];
    toggleable?: boolean;
}) => {
    const handleSelectedOption = (optionName: string) => {
        onSelected(optionName);
    };

    const handleToggleChange = (
        _event: React.MouseEvent<HTMLElement>,
        newSelection: string[] | null,
    ) => {
        if (newSelection !== null && onSelectedMultiple) {
            onSelectedMultiple(newSelection);
        }
    };

    return (
        <>
            <p>Select an option:</p>
            <div className="grid grid-cols-3 gap-4 p-4">
                {!toggleable ? (
                    optionsData.map((option) => (
                        <RoomButton
                            key={option.id}
                            onClick={() => handleSelectedOption(option.name)}>
                            {option.name}
                        </RoomButton>
                    ))
                ) : (
                    <ToggleButtonGroup
                        value={selected}
                        onChange={handleToggleChange}
                        exclusive={false}
                        aria-label="multiple selection"
                        className="col-span-3 flex flex-wrap gap-2">
                        {optionsData.map((option) => {
                            const isSelected = selected.includes(option.name);
                            console.log(
                                `${option.name} is selected: ${isSelected}`,
                            );
                            return (
                                <ToggleButton
                                    key={option.id}
                                    value={option.name}
                                    aria-label={option.name}
                                    sx={{
                                        // Default (NOT selected) – look like normal outlined button
                                        borderRadius: 2,

                                        // Not selected
                                        bgcolor: 'primary.light',
                                        color: 'primary.contrastText',

                                        '&:hover': {
                                            bgcolor: 'primary.main',
                                        },

                                        // Selected state
                                        '&.Mui-selected': {
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',

                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                        },
                                    }}>
                                    {option.name}
                                </ToggleButton>
                            );
                        })}
                    </ToggleButtonGroup>
                )}
            </div>
        </>
    );
};

export default Log;
