export type LoginType = {
    email: string;
    languageID: string;
};

export type FormValues = {
    email: string;
};

export type InitialState = {
    loading: boolean;
    email: string;
    status: string;
    token: string | null;
    refreshToken: string | null;
    error: string;
};

