import {createSelector} from "reselect";
import {RootState} from '../hooks';

const loginState = (state: RootState) => {
    return state.Login
};

export const selectLoginState = createSelector(
    loginState,
    (loginState) => loginState
)
