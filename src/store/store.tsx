import { configureStore } from '@reduxjs/toolkit';
import filesReducer from './reducers/filesReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
    reducer: {
        files: filesReducer,
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
