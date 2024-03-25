import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const NavData = () => {
    const menuItems: any = [
        {
            label: 'Menu',
            isHeader: true,
        },
        {
            id: 'dashboard',
            label: 'Dashboards',
            icon: 'ri-dashboard-2-line',
            link: '/dashboard',
        },
        {
            id: 'calendar',
            label: 'Calendar',
            icon: 'ri-calendar-2-line',
            link: '/Calendar',
        }
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default NavData;
