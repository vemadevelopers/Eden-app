export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}