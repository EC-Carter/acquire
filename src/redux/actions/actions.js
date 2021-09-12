
import { SET_INITAL_DATA } from '../actions/types'



export const setInital = initalData => {
    
    return{
        type:SET_INITAL_DATA,
        data:initalData
    }
}