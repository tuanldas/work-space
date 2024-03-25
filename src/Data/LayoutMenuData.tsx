import React, {useEffect} from 'react';

const NavData = () => {

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
    }, []);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/dashboard",
        },
        {
            id: "calendar",
            label: "Calendar",
            icon: " ri-Calendar-2-line",
            link: "/Calendar",
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavData;
