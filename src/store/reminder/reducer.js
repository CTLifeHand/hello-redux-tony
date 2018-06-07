import * as actionType from './action-type';
import { bake_cookie, read_cookie } from 'sfcookies';


const reminder = (action) => {
    const { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
};


export const reminders = (state = read_cookie("reminders") || [], action = {}) => {
    let reminders = null;
    switch (action.type) {
        case actionType.ADD_REMINDER:
            reminders = [
                ...state,
                reminder(action)
            ];
            bake_cookie("reminders", reminders);
            return reminders;
        case actionType.DELETE_REMINDER:
            reminders = state.filter(reminder => reminder.id !== action.id);
            bake_cookie("reminders", reminders);
            return reminders;
        case actionType.CLEAR_REMINDERS:
            reminders = [];
            bake_cookie("reminders", reminders);
            return reminders;
        default: return state;
    }
}