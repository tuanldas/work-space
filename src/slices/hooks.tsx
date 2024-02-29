import {useDispatch} from 'react-redux';
import {store} from './index';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
