import ApiCaller from './apiCaller';
import {GetEventsOptions} from '../slices/Calendar/type';

export const callApiGetEvents = (option: GetEventsOptions) => {
    return new ApiCaller()
        .setUrl('/events')
        .setHeaders({
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            },
            params: option
        })
        .get();
};
