import {Navigate, Route, Routes} from 'react-router-dom';
import {MasterLayout} from '../_metronic/layout/MasterLayout.tsx';

const PrivateRouters = () => {
    return (
        <>
            <Routes>
                <Route element={<MasterLayout/>}>
                    <Route path="*" element={<Navigate to="/error/404"/>}/>
                </Route>
            </Routes>
        </>
    );
};

export {PrivateRouters};
