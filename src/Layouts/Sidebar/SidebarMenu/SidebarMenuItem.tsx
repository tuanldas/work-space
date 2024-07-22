import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {checkIsActive} from '../../../helpers/RouterHelpers.ts';

const SidebarMenuItem = ({
                             title,
                             to,
                             icon,
                             hasBullet = false,
                             hasSubMenu = false,
                         }: {
    title: string,
    to: string,
    icon?: string,
    hasSubMenu?: boolean,
    hasBullet?: boolean
}) => {
    const {pathname} = useLocation();

    return (
        <>
            <div className={clsx('menu-item', {'active': checkIsActive(pathname, to)})}  data-menu-item-toggle="accordion" data-menu-item-trigger="click">
                <Link to={to}
                      className={clsx(
                          'menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg pl-[10px] pr-[10px] py-[8px]',
                          {'gap-[14px]': !hasSubMenu},
                          {'gap-[5px]': hasSubMenu},
                      )}>
                    {
                        hasBullet ? <span
                                className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                            : null
                    }
                    {
                        icon ?
                            <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <i className={`ki-filled ${icon} text-lg`}></i></span>
                            : null
                    }
                    <span
                        className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">{title}</span>
                </Link>
            </div>
        </>
    );
};
export default SidebarMenuItem;
