import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';

const Root: FC = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default Root;
