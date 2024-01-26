import mockedUsers from '../mockedData/users.json';

export const findUserByEmail = (email: string): any => {
    return mockedUsers.find((user) => user.email === email);
};
