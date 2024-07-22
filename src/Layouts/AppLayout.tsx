import Sidebar from './Sidebar';

const AppLayout = ({children}) => {
    return (
        <>
            <div className="flex grow">
                <p>asdf</p>
                <Sidebar/>
                {children}
            </div>
        </>
    );
};
export default AppLayout;
