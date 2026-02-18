import RoomButton from '../components/buttons/RoomButton';

const Home = () => {
    return (
        <div>
            <RoomButton onClick={() => console.log('clicked')}>
                Living Room
            </RoomButton>
        </div>
    );
};

export default Home;
