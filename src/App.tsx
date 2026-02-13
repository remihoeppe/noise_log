import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Log from './pages/Log';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/log', element: <Log /> },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
