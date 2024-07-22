import storage from "redux-persist/lib/storage";
import {encryptTransform} from "redux-persist-transform-encrypt";
import {persistReducer} from "redux-persist";
import {authReducer} from "./index.tsx";

const authSlicePersistConfig = {
    key: 'authSlice',
    storage,
    transforms: [
        encryptTransform({
            secretKey: import.meta.env.VITE_APP_REDUX_ENCRYPT_SECRET_KEY,
        }),
    ],
};
export const persistedAuthReducer = persistReducer(authSlicePersistConfig, authReducer);
