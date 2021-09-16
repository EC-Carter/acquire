

import { DELETE_TARGET } from '../actions/types';
import { UPDATE_TARGET } from '../actions/types';
import { ADD_TARGET } from '../actions/types';
import { IS_EDIT} from '../actions/types';
import { SET_TARGET_TO_UPDATE } from '../actions/types';

export const deleteTarget = id => {
    return{
        type:DELETE_TARGET,
        id
    }
}
export const addTarget = target => {
    return{
        type:ADD_TARGET,
        target
    }
}

export const updateTarget = target => {
    return{
        type:UPDATE_TARGET,
        target
    }
}
export const setIsEdit = value => {
    return{
        type:IS_EDIT,
        value
    
    }
}

export const setTargetToUpdate = target => {
    return{
        type:SET_TARGET_TO_UPDATE,
        target
    
    }
}