import Log from './Log';
import roomsData from '../data/room';

const Home = () => {
    return (
        <>
            <Log optionsData={roomsData} />
        </>
    );
};

export default Home;
