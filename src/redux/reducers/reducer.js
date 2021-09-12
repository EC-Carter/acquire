
import { SET_INITAL_DATA } from '../actions/types';
import { DELETE_TARGET } from '../actions/types';
import { UPDATE_TARGET } from '../actions/types';
import { ADD_TARGET } from '../actions/types';

const reducer = (state,action) => {
    if(state === undefined){
        state = {
            targets:[],
            isEdit:false,
            targetToUpdate:{}
        }
    }

    switch(action.type){
        case SET_INITAL_DATA:
            return {
                ...state,
                targets:action.data
            }


        default:
            return state;
    }
    
}

export default reducer;
