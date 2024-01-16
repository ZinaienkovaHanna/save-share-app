import { FC } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

import styles from './Error.module.css';

const Error: FC = () => {
    const error = useRouteError() as Error;

    if (!isRouteErrorResponse(error)) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;
