import {changeHTMLAttribute} from './utils';
import {
    changeLayoutAction,
    changeLayoutModeAction,
    changeLayoutPositionAction,
    changeLayoutThemeAction,
    changeLayoutThemeColorAction,
    changeLayoutWidthAction,
    changeLeftsidebarSizeTypeAction,
    changeLeftsidebarViewTypeAction,
    changePreLoaderAction,
    changeSidebarImageTypeAction,
    changeSidebarThemeAction,
    changeSidebarVisibilityAction,
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
