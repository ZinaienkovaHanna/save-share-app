import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/filesReducer';

const store = configureStore({
    reducer: {
        files: reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
