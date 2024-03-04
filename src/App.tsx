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
            console.log(1);
            toast('Welcome Back! This is a Toast Notification', {
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
