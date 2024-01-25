import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ResetPassword from '../pages/ResetPassword';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/reset_password',
                element: <ResetPassword />,
            },
        ],
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
