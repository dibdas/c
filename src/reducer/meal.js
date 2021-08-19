
import {ERROR_MEALS,SUCCESS_MEALS}from '../actions/constants'
const defaultState={ meal:{},status:MEAL,error:null}

const mealreducer = (state= defaultState,action)=>{
    switch(action.type){
        case SUCCESS_MEALS:
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