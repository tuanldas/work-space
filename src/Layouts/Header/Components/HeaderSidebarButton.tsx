const HeaderSidebarButton = () => {
    return (
        <>
            <div className="flex gap-1 lg:hidden items-center -ml-1">
                <a className="shrink-0" href="#">
                    <img className="max-h-[25px] w-full" src={'media/app/mini-logo.svg'} alt={'Logo'}/>
                </a>
                <div className="flex items-center">
                    <button className="btn btn-icon btn-light btn-clear btn-sm" data-drawer-toggle="#sidebar">
                        <i className="ki-filled ki-menu">
                        </i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebarButton;
