import Sidebar from './Sidebar';

const AppLayout = ({children}) => {
    return (
        <>
            <div className="flex grow">
                <Sidebar/>
                {children}
            </div>
        </>
    );
};
export default AppLayout;
