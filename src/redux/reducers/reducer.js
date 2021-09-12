
import { SET_INITAL_DATA } from '../actions/types'

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
