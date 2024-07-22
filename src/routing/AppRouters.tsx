import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import KTComponent from '../metronic/core';
import KTLayout from '../metronic/app/layouts/demo1';
import ErrorPages from '../pages/errors/ErrorPages.tsx';
import App from '../App.tsx';
import Login from '../pages/Auth/Login.tsx';
import AuthLayout from '../pages/Auth/AuthLayout.tsx';
import {useSelector} from 'react-redux';
import {selectAuthSlice} from '../store/authSlice/selector.tsx';
import PrivateRouters from './PrivateRouters.tsx';

const {BASE_URL} = import.meta.env;

const AppRouters = () => {
    const authData = useSelector(selectAuthSlice);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        if (authData.accessToken && authData.refreshToken) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [authData]);

    useEffect(() => {
        KTComponent.init();
        KTLayout.init();
    }, []);

    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                <Route path="error/*" element={<ErrorPages/>}/>
                    {
                        isAuthenticated
                            ? <Route element={<App/>}>
                                <Route path="/*" element={<PrivateRouters/>}/>
                                <Route index element={<Navigate to="/dashboard"/>}/>
                            </Route>

                            : <Route element={<AuthLayout/>}>
                                <Route path="login" element={<Login/>}/>
                                <Route path="*" element={<Navigate to="/login"/>}/>
                            </Route>
                    }
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;
