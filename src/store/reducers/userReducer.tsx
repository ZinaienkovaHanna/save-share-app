import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userStateType {
    email: null | string;
    token: null | string;
    userId: null | string;
}

const initialState: userStateType = {
    email: null,
    token: null,
    userId: null,
};

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ email: string; token: string; id: string }>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.userId = action.payload.id;
        },

        removeUser(state) {
            state.email = null;
            state.token = null;
            state.userId = null;
        },
    },
});

export const { setUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
