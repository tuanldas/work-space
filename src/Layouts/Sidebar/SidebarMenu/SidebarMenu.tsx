import SidebarMenuItem from './SidebarMenuItem.tsx';
import SidebarMenuItemWithSub from './SidebarMenuItemWithSub.tsx';

const SidebarMenu = () => {
    return (
        <>
            <SidebarMenuItem to={'dashboard'} icon={'ki-users'} title={'Dashboard'}/>
            <SidebarMenuItemWithSub
                icon={'ki-profile-circle'}
                title={'Public Profile'}
            />
        </>
    );
};

export default SidebarMenu;
