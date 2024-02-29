import React from 'react';
import {Navigate} from 'react-router-dom';

//Dashboard
import DashboardEcommerce from '../pages/DashboardEcommerce';

//login
import Login from '../pages/Authentication/Login';

const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },

  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes : any= [
  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
