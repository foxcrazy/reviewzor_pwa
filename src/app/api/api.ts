export type AuthData = {
    email: string;
    password: string;
}

export type AuthResponse = {
    responseStatus: boolean,
}

export type RegisterResponse = {
    responseStatus: boolean,
    response: string
}

export const request = async <T>(input: RequestInfo, init?: RequestInit) => {
    const response = await fetch(input, init);
    if (!response.ok) return;
    if (response.status === 204) return null;
    return (await response.json()) as T;
}
