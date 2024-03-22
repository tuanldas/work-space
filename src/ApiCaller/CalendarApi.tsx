import ApiCaller from './apiCaller';
import {FetchEventsOptions} from '../slices/Calendar/type';

export const callApiLogin = (option: FetchEventsOptions) => {
    return new ApiCaller()
        .setUrl('events')
        .setHeaders({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            params: option
        })
        .get();
};
