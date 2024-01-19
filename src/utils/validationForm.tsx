interface Error {
    username?: string;
    email?: string;
    password?: string;
    terms?: string;
}

export const validateForm = (
    type: string,
    username: string,
    termsAccepted: boolean,
    email: string,
    password: string
): { isValid: boolean; errors: Error } => {
    let isValid = true;

    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    const newErrors: Error = {};

    if (type === 'signup' && (username.length < 4 || username.length > 30)) {
        newErrors.username = 'Username must be between 4 and 30 characters';
        isValid = false;
    }

    if (type === 'signup' && !termsAccepted) {
        newErrors.terms = 'Terms must be accepted';
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        newErrors.email = 'Invalid email address';
        isValid = false;
    }

    if ((type === 'signup' || type === 'login') && !passwordRegex.test(password)) {
        newErrors.password =
            'Password must contain at least 1 digit, 1 lowercase letter, 1 uppercase letter, and be between 8 and 30 characters';
        isValid = false;
    }

    return { isValid, errors: newErrors };
};
