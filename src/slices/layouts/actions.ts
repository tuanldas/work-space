import {changeHTMLAttribute} from './utils';
import {
    changeLayoutAction,
    changeLayoutModeAction,
    changeLayoutPositionAction,
    changeLayoutThemeAction,
    changeLayoutThemeColorAction,
    changeLayoutWidthAction,
    changeLeftsidebarSizeTypeAction,
    changeLeftsidebarViewTypeAction, changeSidebarImageTypeAction,
    changeSidebarThemeAction, changeSidebarVisibilityAction,
    changeTopbarThemeAction
} from './reducer';

export const changeLayoutMode = (layoutMode: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-bs-theme", layoutMode);
        dispatch(changeLayoutModeAction(layoutMode));
    } catch (error) { }
};

export const changeLayoutTheme = (layoutTheme: any) => async (dispatch: any) => {
    try {
        dispatch(changeLayoutMode("light"))
        if (layoutTheme === "galaxy") {
            dispatch(changeLayoutMode("dark"))
        }
        changeHTMLAttribute("data-theme", layoutTheme);
        dispatch(changeLayoutThemeAction(layoutTheme));
    } catch (error) { }
};

export const changeLeftsidebarViewType = (leftsidebarViewtype: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute('data-layout-style', leftsidebarViewtype);
        dispatch(changeLeftsidebarViewTypeAction(leftsidebarViewtype));
    } catch (error) {
        // console.log(error);
    }
};

export const changeLeftsidebarSizeType = (leftsidebarSizetype: any) => async (dispatch: any) => {
    try {
        switch (leftsidebarSizetype) {
            case 'lg':
                changeHTMLAttribute('data-sidebar-size', 'lg');
                break;
            case 'md':
                changeHTMLAttribute('data-sidebar-size', 'md');
                break;
            case 'sm':
                changeHTMLAttribute('data-sidebar-size', 'sm');
                break;
            case 'sm-hover':
                changeHTMLAttribute('data-sidebar-size', 'sm-hover');
                break;
            default:
                changeHTMLAttribute('data-sidebar-size', 'lg');
        }
        dispatch(changeLeftsidebarSizeTypeAction(leftsidebarSizetype));

    } catch (error) {
        // console.log(error);
    }
};

export const changeSidebarTheme = (theme: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute('data-sidebar', theme);
        dispatch(changeSidebarThemeAction(theme));
    } catch (error) {
        // console.log(error);
    }
};

export const changeLayoutThemeColor = (layoutThemeColor: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute('data-theme-colors', layoutThemeColor);
        dispatch(changeLayoutThemeColorAction(layoutThemeColor));
    } catch (error) {
    }
};

export const changeLayoutWidth = (layoutWidth: any) => async (dispatch: any) => {
    try {
        if (layoutWidth === 'lg') {
            changeHTMLAttribute('data-layout-width', 'fluid');
        } else {
            changeHTMLAttribute('data-layout-width', 'boxed');
        }
        dispatch(changeLayoutWidthAction(layoutWidth));
    } catch (error) {
        return error;
    }
};

export const changeLayoutPosition = (layoutposition: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute('data-layout-position', layoutposition);
        dispatch(changeLayoutPositionAction(layoutposition));
    } catch (error) {
        // console.log(error);
    }
};

export const changeTopbarTheme = (topbarTheme: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute('data-topbar', topbarTheme);
        dispatch(changeTopbarThemeAction(topbarTheme));
    } catch (error) {
        // console.log(error);
    }
};

export const changeLayout = (layout: any) => async (dispatch: any) => {
    try {
        if (layout === "twocolumn") {
            document.documentElement.removeAttribute("data-layout-width");
        } else if (layout === "horizontal") {
            document.documentElement.removeAttribute("data-sidebar-size");
        } else if (layout === "semibox") {
            changeHTMLAttribute("data-layout-width", "fluid");
            changeHTMLAttribute("data-layout-style", "default");
        }
        changeHTMLAttribute("data-layout", layout);
        dispatch(changeLayoutAction(layout));
    } catch (error) { }
};

export const changeSidebarImageType = (leftsidebarImagetype: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-sidebar-image", leftsidebarImagetype);
        dispatch(changeSidebarImageTypeAction(leftsidebarImagetype));
    } catch (error) {
        // console.log(error);
    }
};

export const changeSidebarVisibility = (sidebarVisibilitytype: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-sidebar-visibility", sidebarVisibilitytype);
        dispatch(changeSidebarVisibilityAction(sidebarVisibilitytype));
    } catch (error) { }
};
