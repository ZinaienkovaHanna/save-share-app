import { FC } from 'react';
import FileList from '../../components/FileList';
import { useAuth } from '../../store/hooks';
import { Navigate } from 'react-router-dom';

const Home: FC = () => {
    const { isAuth } = useAuth();

    return isAuth ? <FileList /> : <Navigate to="/login" />;
};

export default Home;
