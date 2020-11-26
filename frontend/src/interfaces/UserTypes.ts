export type UserType = {
    email: string
    password: string
};

export type RegisterUserType = {
    email: string
    username: string
    password: string
    confirmPassword: string
};

export type ForgotUserType = {
    email: string
};