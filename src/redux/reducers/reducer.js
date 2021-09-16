

import { DELETE_TARGET } from '../actions/types';
import { UPDATE_TARGET } from '../actions/types';
import { ADD_TARGET } from '../actions/types';
import { IS_EDIT} from '../actions/types';
import { SET_TARGET_TO_UPDATE } from '../actions/types';

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
                }),
                targetToUpdate:action.target
            }

        case SET_TARGET_TO_UPDATE:
            return{
                ...state,
                targetToUpdate:action.target
            }


        default:
            return state;
    }
    
}

export default reducer;
