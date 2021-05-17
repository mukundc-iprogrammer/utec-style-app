import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility.js';

const initialState = {
    values: [],
    isEdit: false
};

// const deleteResult = ( state, action ) => {
//     const updatedArray = state.results.filter( result => result.id !== action.resultElId );
//     return updateObject( state, { results: updatedArray } );
// };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        // case actionTypes.STORE_RESULT : return updateObject( state, { results: state.results.concat( { id: new Date(), value: action.result * 2 } ) } );
        case actionTypes.SAVE_VALUES : 
            let updatedSaveValues
            if (state.isEdit === true) {
                updatedSaveValues = [ ...state.values.filter(item => item.unique_id !== action.value.unique_id)]
                console.log('updatedSaveValues', updatedSaveValues)
            }    
            else { 
                updatedSaveValues = [ ...state.values, action.value]
            }
            return {
                ...state,
                // values: [ ...state.values, action.value]
                values: updatedSaveValues
            };
        case actionTypes.UPDATE_VALUES :
            // console.log('update value reducer>>>', action.value)
            // const index = state.values.findIndex(i => i.unique_id === action.value.unique_id)
            // let updatedFormValues = [ ...state.values.filter(item => item.unique_id === action.value.unique_id)]
            // console.log('updatedFormValues', updatedFormValues)

            return {
                ...state,
                // values: [ ...state.values, action.value]
                values: state.values.map(item => item.unique_id === action.value.unique_id ? action.value : item) 
            };
        case actionTypes.DELETE_VALUE :
            console.log('deleting value...', action.id)
            const updatedValues = state.values.filter(item => item.unique_id !== action.id)
            console.log(updatedValues)
            return {
                ...state,
                values: updatedValues
            }
        case actionTypes.EDIT_VALUE :
            return {
                ...state,
                isEdit: true
            }
        case actionTypes.NO_EDIT :
            return {
                ...state,
                isEdit: false
            }
        default:
            return state;
    }
};

export default reducer;