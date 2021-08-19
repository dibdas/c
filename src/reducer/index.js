
import { combineReducers } from 'redux';
import mealreducer from './meal';
import mealsreducer from './meals';
import catergoryreducer from './category';


const rootReducer = combineReducers({ mealreducer,mealsreducer,catergoryreducer});
export default rootReducer;