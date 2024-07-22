import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import KTComponent from '../metronic/core';
import KTLayout from '../metronic/app/layouts/demo1';
import ErrorPages from '../pages/errors/ErrorPages.tsx';
import Dashboard from '../pages/Dashboard';

const {BASE_URL} = import.meta.env;

const AppRouters = () => {
    useEffect(() => {
        KTComponent.init();
        KTLayout.init();
    }, []);

    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                {/*<Route element={<App/>}>*/}
                    <Route path="error/*" element={<ErrorPages/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    {/*<Route path='logout' element={<Logout />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;
