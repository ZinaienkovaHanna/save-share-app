interface Error {
    email: string;
    password: string;
}

export const validateLoginForm = (
    email: string,
    password: string
): { isValid: boolean; errors: Error } => {
    let isValid = true;

    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    const newErrors: Error = {
        email: '',
        password: '',
    };

    if (!emailRegex.test(email)) {
        newErrors.email = 'Invalid email address.';
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        newErrors.password = 'Invalid password.';
        isValid = false;
    }

    return { isValid, errors: newErrors };
};
