import {Route, Routes} from 'react-router-dom';
import ErrorsLayout from './ErrorsLayout.tsx';

const ErrorPages = () => {
    return (
        <Routes>
            <Route element={<ErrorsLayout />}>
                {/*<Route path='404' element={<Error404 />} />*/}
                {/*<Route path='500' element={<Error500 />} />*/}
                {/*<Route index element={<Error404 />} />*/}
            </Route>
        </Routes>
    )
}
export default ErrorPages
