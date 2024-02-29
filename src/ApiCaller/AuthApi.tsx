import ApiCaller from './apiCaller';

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
