import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import NonAuthLayout from '../Layouts/NonAuthLayout';
import VerticalLayout from '../Layouts/index';
import {authProtectedRoutes, publicRoutes} from './allRoutes';
import AuthProtected from './AuthProtected';

const Index = () => {
    return (
        <React.Fragment>
            <Suspense fallback="Loading...">
            <Routes>
                <Route>
                    {publicRoutes.map((route: any, idx: any) => (
                        <Route
                            path={route.path}
                            element={
                                <NonAuthLayout>
                                    {route.component}
                                </NonAuthLayout>
                            }
                            key={idx}
                        />
                    ))}
                </Route>

                <Route>
                    {authProtectedRoutes.map((route: any, idx: any) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtected>
                                    <VerticalLayout>{route.component}</VerticalLayout>
                                </AuthProtected>}
                            key={idx}
                        />
                    ))}
                </Route>
            </Routes>
            </Suspense>
        </React.Fragment>
    );
};

export default Index;
