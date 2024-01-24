import { configureStore } from '@reduxjs/toolkit';
import filesReducer from './reducers/filesReducer';
import usersReducer from './reducers/usersReducer';

const store = configureStore({
    reducer: {
        files: filesReducer,
        users: usersReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
