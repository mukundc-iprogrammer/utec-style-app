import * as actionTypes from './actionTypes';

export const saveValues = (val) => {
    return {
        type: actionTypes.SAVE_VALUES,
        value: val.data.payload
    };
};

export const updateValues = (val) => {
    console.log('update value in actioncreator', val)
    return {
        type: actionTypes.UPDATE_VALUES,
        value: val
    };
};

export const deleteValue = (id) => {
    return {
        type: actionTypes.DELETE_VALUE,
        id: id
    };
};

export const editValue = () => {
    return {
        type: actionTypes.EDIT_VALUE,
    };
};

export const noEdit = () => {
    return {
        type: actionTypes.NO_EDIT,
    };
};