import {mealsByCategory,mealsById} from '../API/api';
import  {errormeals,successmeals, successmeal} from './constants'
const SUCCESS_MEAL ='SUCCESS_MEALS';


const fetchmealsByCategory = (category) => async(dispatch) => {
    dispatch({
        type: SUCCESS_MEAL
    })
    const response = mealsByCategory(category)
    try {
        const data = await response;
        return dispatch(successmeals(data.meals));
    }
    catch (e){
        return dispatch(errormeals('Error while fetching data'));
    }


}

const fetchmealsById = (id) => async(dispatch) => {
    dispatch({
        type: SUCCESS_MEAL
    })
    const response = mealsById(id)
    try {
        const data = await response;
        return dispatch(successmeal(data.meals));
    }
    catch (e){
        return errormeals(dispatch('Error while fetching data'));
    }


}

export {fetchmealsByCategory,fetchmealsById}