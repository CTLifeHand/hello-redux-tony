import * as actionType from './action-type';

export const addReminder = (text, dueDate) => {
    return {
        type: actionType.ADD_REMINDER,
        text,
        dueDate
    }
};

export const deleteReminder = (id) => {
    return {
        type: actionType.DELETE_REMINDER,
        id
    }
};

export const clearReminders = () => {
    return {
        type: actionType.CLEAR_REMINDERS
    }
};
