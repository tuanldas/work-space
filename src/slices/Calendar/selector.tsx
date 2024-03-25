import {RootState} from '../hooks';
import {createSelector} from 'reselect';

const state = (state: RootState) => {
    return state.Calendar;
};

export const selectCalendarProperties = createSelector(
    state,
    (Calendar) => Calendar
);
