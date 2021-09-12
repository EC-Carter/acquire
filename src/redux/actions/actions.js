
import { SET_INITAL_DATA } from '../actions/types';
import { DELETE_TARGET } from '../actions/types';
import { UPDATE_TARGET } from '../actions/types';
import { ADD_TARGET } from '../actions/types';


export const setInital = initalData => {
    
    return{
        type:SET_INITAL_DATA,
        data:initalData
    }
}

export const deleteTarget = target => {
    return{
        type:DELETE_TARGET,
        target
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