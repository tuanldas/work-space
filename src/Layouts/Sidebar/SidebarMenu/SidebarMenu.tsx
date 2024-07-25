import SidebarMenuItem from './SidebarMenuItem.tsx';

const SidebarMenu = () => {
    return (
        <>
            <SidebarMenuItem to={'dashboard'} icon={'ki-users'} title={'Dashboard'}/>
            <SidebarMenuItem to={'projects'} icon={'ki-questionnaire-tablet'} title={'Projects'}/>
        </>
    );
};

export default SidebarMenu;
