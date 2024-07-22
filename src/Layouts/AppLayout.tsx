import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = ({children}) => {
    return (
        <>
            <div className="flex grow">
                <Sidebar/>
                <div className={'wrapper flex grow flex-col'}>
                    <Header/>
                    <main className="grow content pt-5" id="content" role="content">
                        <div className="container-fixed">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};
export default AppLayout;
