const BASE_URL = process.env.REACT_APP_BASE_URL || '';

export const login = async (email: string, password: string) => {
    try {
        const responce = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!responce.ok) {
            throw new Error('Login failed');
        }

        const { token, id } = await responce.json();

        return { token, id };
    } catch (error) {
        const typedError = error as Error;

        console.error(`{'Error during login:', ${typedError?.message}}`);
    }
};
