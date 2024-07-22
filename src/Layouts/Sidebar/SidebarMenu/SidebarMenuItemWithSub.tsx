import {ReactNode} from 'react';
import clsx from 'clsx';
import {useLocation} from 'react-router-dom';
import {checkIsActive} from '../../../helpers/RouterHelpers.ts';

const SidebarMenuItemWithSub = ({
                                    to,
                                    icon,
                                    title,
                                    children,
                                    hasBullet = false,
                                    hasSubMenu = false,
                                }: {
    to: string,
    icon?: string,
    title: string,
    children?: ReactNode,
    hasBullet?: boolean,
    hasSubMenu?: boolean
}) => {
    const {pathname} = useLocation();

    return (
        <>
            <div className={clsx(
                'menu-item',
                {'show': checkIsActive(pathname, to)}
            )} data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <div
                    className={
                        clsx(
                            'menu-link border border-transparent grow cursor-pointer pl-[10px] pr-[10px]',
                            {'flex items-center gap-[10px] py-[6px]': !hasSubMenu},
                            {'gap-[14px] py-[8px]': hasSubMenu}
                        )
                    }
                >
                    {
                        hasBullet ? <span
                                className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                            : null
                    }
                    {
                        icon ?
                            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]"><i
                                className={`ki-filled ${icon} text-lg`}></i></span>
                            : null
                    }
                    <span
                        className={clsx(
                            'menu-title text-gray-700 menu-link-hover:!text-primary',
                            {'text-sm font-semibold menu-item-active:text-primary': !hasSubMenu},
                            {'text-2sm font-medium mr-1 menu-item-active:font-semibold': hasSubMenu}
                        )}>{title}</span>
                    <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                    </span>
                </div>

                <div
                    className={clsx(
                        'menu-accordion gap-0.5 relative before:absolute before:top-0 before:bottom-0 before:border-l before:border-gray-200',
                        {'before:left-[20px] pl-[10px]': !hasSubMenu},
                        {'before:left-[32px] pl-[22px]': hasSubMenu}
                    )}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default SidebarMenuItemWithSub;
