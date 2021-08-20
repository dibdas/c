
import { combineReducers } from 'redux';
import mealreducer from './meal';
import mealsreducer from './meals';
import categoryreducer from './category';


const rootReducer = combineReducers({ mealreducer,mealsreducer,categoryreducer});
export default rootReducer;