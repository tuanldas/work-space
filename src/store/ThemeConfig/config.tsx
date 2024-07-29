import storage from "redux-persist/lib/storage";
import {encryptTransform} from "redux-persist-transform-encrypt";
import {persistReducer} from "redux-persist";
import {themeConfigReducer} from './index.tsx';

const persistConfig = {
    key: 'themeConfig',
    storage,
    transforms: [
        encryptTransform({
            secretKey: import.meta.env.VITE_APP_REDUX_ENCRYPT_SECRET_KEY,
        }),
    ],
};
export const persistedThemeConfigReducer = persistReducer(persistConfig, themeConfigReducer);
