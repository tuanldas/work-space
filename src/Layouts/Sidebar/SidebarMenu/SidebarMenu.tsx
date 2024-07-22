import SidebarMenuItem from './SidebarMenuItem.tsx';
import SidebarMenuItemWithSub from './SidebarMenuItemWithSub.tsx';

const SidebarMenu = () => {
    return (
        <>
            <SidebarMenuItem to={'dashboard2'} icon={'ki-users'} title={'Dashboard'}/>
            <div className="menu-item pt-2.25 pb-px">
                <span
                    className="menu-heading uppercase text-2sm font-semibold text-gray-500 pl-[10px] pr-[10px]">User</span>
            </div>
            <SidebarMenuItemWithSub
                icon={'ki-profile-circle'}
                title={'Public Profile'}
                children={
                    <>
                        <SidebarMenuItemWithSub
                            title={'Profiles'}
                            hasBullet={true}
                            hasSubMenu={true}
                            children={
                                <>
                                    <SidebarMenuItem to={'dashboard'}
                                                     title={'Default'}
                                                     hasBullet={true}
                                                     hasSubMenu={true}
                                    />
                                    <SidebarMenuItem to={'dashboard2'}
                                                     title={'Default'}
                                                     hasBullet={true}
                                                     hasSubMenu={true}
                                    />
                                </>
                            }
                        />
                    </>
                }
            />
        </>
    );
};

export default SidebarMenu;
