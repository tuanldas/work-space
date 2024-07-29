import {Navigate, Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

const PrivateRouters = () => {
    const DashboardPage = lazy(() => import('../pages/Dashboard'));
    const ProjectPage = lazy(() => import('../pages/Project'));
    const ProjectDetailPage = lazy(() => import('../pages/Project/Detail'));

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/dashboard"/>}/>
            <Route path="dashboard" element={
                <SuspenseView>
                    <DashboardPage/>
                </SuspenseView>
            }/>
            <Route path="projects" element={
                <SuspenseView>
                    <ProjectPage/>
                </SuspenseView>
            }/>
            <Route path="projects/:uuid" element={
                <SuspenseView>
                    <ProjectDetailPage/>
                </SuspenseView>
            }/>
        </Routes>
    );
};


const SuspenseView = ({children}) => {
    TopBarProgress.config({
        barThickness: 2,
        shadowBlur: 5,
    });
    return <Suspense fallback={<TopBarProgress/>}>{children}</Suspense>;
};
export default PrivateRouters;
