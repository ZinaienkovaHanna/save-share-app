interface Error {
    email: string;
}

export const validateResetPasswordForm = (email: string): { isValid: boolean; errors: Error } => {
    let isValid = true;

    const emailRegex = /^\S+@\S+\.\S+$/;
    const newErrors: Error = {
        email: '',
    };

    if (!emailRegex.test(email)) {
        newErrors.email = 'Invalid email address.';
        isValid = false;
    }

    return { isValid, errors: newErrors };
};
