interface Error {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: string;
}

export const validateSignupForm = (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    termsAccepted: boolean
): { isValid: boolean; errors: Error } => {
    let isValid = true;

    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    const newErrors: Error = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: '',
    };

    if (username.length < 4 || username.length > 30) {
        newErrors.username = 'Username must be between 4 and 30 characters.';
        isValid = false;
    }

    if (!termsAccepted) {
        newErrors.terms = 'Terms must be accepted.';
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        newErrors.email = 'Invalid email address.';
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        newErrors.password =
            'Password must contain at least 1 digit, 1 uppercase letter, and be at least 8 characters long.';
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        newErrors.password =
            'Password must contain at least 1 digit, 1 uppercase letter, and be at least 8 characters long.';
        isValid = false;
    }

    if (password === confirmPassword) {
        newErrors.confirmPassword = 'The passwords do not match.';
        isValid = false;
    }

    return { isValid, errors: newErrors };
};
