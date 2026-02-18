import Button from '@mui/material/Button';

export default function RoomButton({
    onClick,
    children,
}: {
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Button variant="contained" onClick={onClick}>
            {children}
        </Button>
    );
}
