import HeaderSidebarButton from './Components/HeaderSidebarButton.tsx';
import HeaderMenu from './Components/HeaderMenu.tsx';

const Header = () => {
    return (
        <header
            className="header fixed top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500"
            data-sticky="true" data-sticky-class="shadow-sm dark:border-b dark:border-b-coal-100"
            data-sticky-name="header" id="header">
            <div className="container-fixed flex justify-between items-stretch lg:gap-4" id="header_container">
                <HeaderSidebarButton/>
                <div className="flex items-stretch" id="megamenu_container">
                </div>
                <HeaderMenu/>
            </div>
        </header>
    );
};
export default Header;
