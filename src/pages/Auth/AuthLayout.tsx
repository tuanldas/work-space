import {Outlet} from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
                <div className="card max-w-[370px] w-full">
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
