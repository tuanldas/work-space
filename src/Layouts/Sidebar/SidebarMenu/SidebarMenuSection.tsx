const SidebarMenuSection = ({title}) => {
    return (
        <>
            <div className="menu-item pt-2.25 pb-px">
                <span
                    className="menu-heading uppercase text-2sm font-semibold text-gray-500 pl-[10px] pr-[10px]">{title}</span>
            </div>
        </>
    );
};

export default SidebarMenuSection;
