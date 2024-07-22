const HeaderMenu = () => {
    return (
        <>
            <div className="flex items-center gap-2 lg:gap-3.5">
                <div className="menu" data-menu="true">
                    <div className="menu-item" data-menu-item-offset="20px, 10px" data-menu-item-placement="bottom-end"
                         data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                        <div className="menu-toggle btn btn-icon rounded-full">
                            <img alt="" className="size-9 rounded-full border-2 border-success shrink-0"
                                 src={'media/avatars/300-2.png'}/>
                        </div>
                        <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[250px]">
                            <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
                                <div className="flex items-center gap-2">
                                    <img alt="" className="size-9 rounded-full border-2 border-success"
                                         src={'media/avatars/300-2.png'}/>
                                    <div className="flex flex-col gap-1.5">
                                        <span
                                            className="text-sm text-gray-800 font-semibold leading-none">Cody Fisher</span>
                                    </div>
                                </div>
                                <span className="badge badge-xs badge-primary badge-outline">Pro</span>
                            </div>
                            <div className="menu-separator">
                            </div>
                            <div className="flex flex-col">
                                <div className="menu-item mb-0.5">
                                    <div className="menu-link">
             <span className="menu-icon">
              <i className="ki-filled ki-moon">
              </i>
             </span>
                                        <span className="menu-title">
              Dark Mode
             </span>
                                        <label className="switch switch-sm">
                                            <input data-theme-state="dark" data-theme-toggle="true" name="check"
                                                   type="checkbox" value="1">
                                            </input>
                                        </label>
                                    </div>
                                </div>
                                <div className="menu-item px-4 py-1.5">
                                    <a className="btn btn-sm btn-light justify-center"
                                       href="#">
                                        Log out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeaderMenu;
