import React, {useEffect} from 'react';
import './assets/scss/themes.scss';
import Route from './Routes';
import {toast, ToastContainer} from 'react-toastify';
import {useAppSelector} from './slices/hooks';
import {selectAuthState} from './slices/Auth/selector';


function App() {
    const authSlice = useAppSelector(selectAuthState);

    useEffect(() => {
        if (authSlice.access_token !== null && authSlice.expires_at !== null) {
            toast('Đăng nhập thành công.', {
                position: 'top-right',
                hideProgressBar: true,
                className: 'bg-success text-white'
            });
        }
    }, [authSlice]);

  return (
    <React.Fragment>
        <ToastContainer/>
      <Route />
    </React.Fragment>
  );
}

export default App;
