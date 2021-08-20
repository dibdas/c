

import {ERROR_MEALS} from '../actions/constants'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import MealsC from '../components/MealsC';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { changecategory } from '../actions/constants';
import { fetchmealsByCategory } from '../actions';


const Meals =({meals, status, error,  fetchmealsByCategory, category, changecategory}) =>{
    const { categorytype } = useParams()
    useEffect(()=>{
        changecategory(categorytype)
            fetchmealsByCategory(categorytype || 'chicken')   
    })
    if(status === ERROR_MEALS){
        return(
            <div>
                Error:{error}
                </div>
        )
    }
    else {
        return(
            <div>
                {meals && meals.map((meal)=> <MealsC key={meal.idMeal} meal={meal} />)}
            </div>
        )
    }
}


Meals.defaultProps = {
    category: 'chicken',
  };

Meals.prototypes ={
    meals:PropTypes.shape({
        status: PropTypes.string.isRequired,
        error: PropTypes.string,
        meals:  PropTypes.objectOf(PropTypes.string).isRequired,
    }).isRequired,
    category: PropTypes.string.isRequired,
    changecategory: PropTypes.func.isRequired,
    mealsbycategory: PropTypes.func.isRequired


}

const mapStateToProps = (state) => ({
    meals: state.meals,
    category: state.category,
  });

  const mapDispatchToProps = (dispatch)=>({
      changecategory: (category) => dispatch(changecategory(category)),
      fetchmealsByCategory: (category) => dispatch(fetchmealsByCategory(category))


  })
export default connect(mapStateToProps,mapDispatchToProps)(Meals);

