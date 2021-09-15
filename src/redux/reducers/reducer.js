
import { SET_INITAL_DATA } from '../actions/types';
import { DELETE_TARGET } from '../actions/types';
import { UPDATE_TARGET } from '../actions/types';
import { ADD_TARGET } from '../actions/types';
import { IS_EDIT} from '../actions/types';

import data from '../../data/targetData.json'

const reducer = (state,action) => {
    if(state === undefined){
        state = {
            targets: data,
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

        case DELETE_TARGET:
            return{
                ...state,
                targets:[...state.targets.filter(target=>{
                    return target.id !== action.id
                })]
            }

        case ADD_TARGET:
            return{
                ...state,
                targets:[...state.targets,action.target]
            }

        case IS_EDIT:
            return{
                ...state,
                isEdit: action.value
            }

        case UPDATE_TARGET:
            return{
                ...state,
                targets:state.targets.map(target =>{
                    if(target.id === action.target.id) return action.target;
                    return target
                })
            }


        default:
            return state;
    }
    
}

export default reducer;
