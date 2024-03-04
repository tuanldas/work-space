import {createSelector} from "reselect";
import {RootState} from '../hooks';

const State = (state: RootState) => {
    return state.Auth
};

export const selectAuthState = createSelector(
    State,
    (state) => state
)
