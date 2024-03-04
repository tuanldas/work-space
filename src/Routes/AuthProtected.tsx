import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectAuthState} from '../slices/Auth/selector';
import {useAppDispatch} from '../slices/hooks';
import {logoutAction} from '../slices/Auth/actions';
import {Navigate} from 'react-router-dom';

const AuthProtected = (props: any) => {
  const dispatch = useAppDispatch();
  const authState = useSelector(selectAuthState);

  useEffect(() => {
    if (authState.access_token !== null && authState.expires_at !== null) {
      if (new Date(authState.expires_at) < new Date()) {
        dispatch(logoutAction());
      }
    }
  }, [authState]);

  if (authState.access_token == null && authState.expires_at == null) {
    return (
        <Navigate to={{pathname: '/login'}}/>
    );
  }

  return <>{props.children}</>;
};

export default AuthProtected;
