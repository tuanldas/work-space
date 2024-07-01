import {FC} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import App from '../App.tsx';
import {ErrorsPage} from '../app/modules/errors/ErrorsPage.tsx';
import {AuthPage} from '../app/auth';
import {PrivateRouters} from './PrivateRouters.tsx';

const {BASE_URL} = import.meta.env;

const AppRoutes: FC = () => {
    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                <Route element={<App/>}>
                    <Route path="error/*" element={<ErrorsPage/>}/>
                    <>
                        <Route path="/*" element={<PrivateRouters/>}/>
                        <Route index element={<Navigate to="/dashboard"/>}/>
                    </>
                    <>
                        <Route path="auth/*" element={<AuthPage/>}/>
                        <Route path="*" element={<Navigate to="/auth"/>}/>
                    </>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export {AppRoutes};
