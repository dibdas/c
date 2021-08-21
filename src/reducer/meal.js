
import {ERROR_MEALS,IDLE_MEALS,SUCCESS_MEALS}from '../actions/constants'
const defaultState={ meal:{},status:IDLE_MEALS,error:null}

const mealreducer = (state= defaultState,action)=>{
    switch(action.type){
        case SUCCESS_MEALS:
            console.log(action);
            return {
                ...state,
                status: SUCCESS_MEALS,
                meal: action.data,
                error: null
            }
            case ERROR_MEALS:
            return {
                ...state,
                status: ERROR_MEALS,
                error: action.error
            }
            default:{
                return state
            }
    }
}

export default mealreducer;
