import React, {lazy} from 'react';
import {Navigate} from 'react-router-dom';
import DashboardEcommerce from '../pages/DashboardEcommerce';

const Login = lazy(() => import('../pages/Authentication/Login'));
const Calendar = lazy(() => import('../pages/Calendar'));

const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },
  {path: '/calendar', component: <Calendar/>},

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
