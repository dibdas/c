import {mealsByArea,mealsByCategory,mealsById} from '../API/api';
import  {ERROR_MEALS,SUCCESS_MEALS,CHANGE_CATEGORY,IDLE_MEALS,changecategory,successmeals, errormeals} from './constants'



const SUCCESS_MEAL ='SUCCESS_MEALS';

const fetchmealsByArea = (area) => async(dispatch) => {
    dispatch({
        type: SUCCESS_MEAL
    })
    const response = mealsByArea(area)
    try {
        const data = await response;
     
        return dispatch(data.meals)
    }
    catch (e){
        return errormeals(dispatch('Error while fetching data'));
    }

}

const fetchmealsByCategory = (category) => async(dispatch) => {
    dispatch({
        type: SUCCESS_MEAL
    })
    const response = mealsByCategory(category)
    try {
        const data = await response;
        return dispatch(data.meals)
    }
    catch (e){
        return errormeals(dispatch('Error while fetching data'));
    }


}

const fetchmealsById = (id) => async(dispatch) => {
    dispatch({
        type: SUCCESS_MEAL
    })
    const response = mealsById(id)
    try {
        const data = await response;
        return dispatch(data.meals)
    }
    catch (e){
        return dispatch('Error while fetching data');
    }


}

export {fetchmealsByArea, fetchmealsByCategory,fetchmealsById}