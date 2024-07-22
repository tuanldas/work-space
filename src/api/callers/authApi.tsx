import ApiCaller from './apiCaller.tsx';

export const callApiLogin = (email: string, password: string) => {
    return new ApiCaller()
        .setUrl('/auth/login')
        .post({
            data: {
                email: email,
                password: password
            }
        });
};


export const callApiLogout = (accessToken: string) => {
    return new ApiCaller()
        .setUrl('/auth/logout')
        .setHeaders({
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
        .post();
};
