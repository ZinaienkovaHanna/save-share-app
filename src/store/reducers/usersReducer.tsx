import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/types';
import users from '../../mockedData/users.json';

interface userStateType {
    users: User[];
}

const initialState: userStateType = {
    users: users,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
    },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
