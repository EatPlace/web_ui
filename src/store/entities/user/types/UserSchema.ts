export interface UserSchema {
    authToken: string | null;
}

export interface AuthSchema {
    username: string;
    password: string;
}

export interface AuthResponse {
    access_token: string;
    token_type: string;
}
