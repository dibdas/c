import {mealsByArea,mealsByCategory} from '../API/api';



const SUCCESS_MEAL ='SUCCESS_MEALS';

const fetchmealsByArea = (area) => (dispatch) => {
    dispatch({
        type: SUCCESS_MEAL
    })
    const response = mealsByArea(area)
    try {
        const data = await response;
        return dispatch(data.meals)
    }
    catch (e){
        return dispatch('Error while fetching data');
    }

}

const fetchmealsByCategory = (category) => (dispatch) => {
    dispatch({
        type: SUCCESS_MEAL
    })
    const response = mealsByCategory(category)
    try {
        const data = await response;
        return dispatch(data.meals)
    }
    catch (e){
        return dispatch('Error while fetching data');
    }


}

export {fetchmealsByArea, fetchmealsByCategory}