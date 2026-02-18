## Change Log

### ToggleButtonGroup in Log.tsx

#### Log.tsx

Imported ToggleButtonGroup and use it when toggleable is true.
Selection is stored as an array; each option is either in the array or not, so no duplicate selections.
New props:
selected – controlled value (array of selected option names).
onSelectedMultiple – called with the new selection array when the user toggles options.
exclusive={false} so multiple options can be selected.
Clicking an option again deselects it (toggle behavior).

#### Home.tsx

Noise type uses the new multi-select: toggleable, selected={selectedNoiseTypes ?? []}, onSelectedMultiple={setSelectedNoiseTypes}.
Removed handleSelectedMultipleOption (no more manual append, so no duplicates).
One noise-type Log when a room is selected; it shows the current selection and lets you add/remove via the toggle group.
“Selected noise type” shows when there is at least one selection and joins multiple with commas.
Result on the Log page when using ToggleButton (noise type):
You can select multiple options.
The same option cannot be selected twice (each appears at most once in the selection).
Clicking a selected option again removes it from the selection.
