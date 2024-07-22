import {callApiLogin, callApiLogout} from '../callers/authApi.tsx';
import {useAppDispatch} from '../../store';
import {clearAuthData, setAuthData} from '../../store/authSlice';
import {useSelector} from 'react-redux';
import {selectAuthSlice} from '../../store/authSlice/selector.tsx';
import {useMutation} from '@tanstack/react-query';

const useAuthMutation = () => {
    const dispatch = useAppDispatch();
    const authData = useSelector(selectAuthSlice);

    const loginMutation = useMutation({
        mutationFn: async (authData: { email: string, password: string }) => {
            return await callApiLogin(authData.email, authData.password);
        },
        onSuccess: (data: void | {
            data: { data: { access_token: string, expires_at: number, refresh_token: string, token_type: string } }
        }) => {
            if (data) {
                dispatch(setAuthData(data.data));
            }
        }
    });
    const logoutMutation = useMutation({
        mutationFn: async () => {
            return await callApiLogout(authData.accessToken);
        },
        onSuccess: () => {
            dispatch(clearAuthData());
        },
        onError: () => {
            dispatch(clearAuthData());
        }
    });

    return {loginMutation, logoutMutation};
};
export default useAuthMutation;
