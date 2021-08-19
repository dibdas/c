import className from 'classnames';
import { Link } from 'react-router-dom';
// import styles from '../styles/Header.css';
import PropTypes from 'prop-types';
import grid from '../styles/grid.css';
import { connect } from 'react-redux';
import Categories from '../components/Categories';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Meals from '../components/Meals';
import { mealsByCategory } from '../API/api';

const sx = className
const Meals =({meals:{meals,status, error}, mealsBycategory,category,changecategory}) =>{
    const { categorytype } =userParams()
    useEffect(()=>{
        changecategory(categorytype)
        if(status === actionsType.IDLE_MEALS||categorytype){
            mealsByCategory(categorytype || 'chicken')
        }
    },[category])
    if(status === actionsType.ERROR_MEALS){
        return(
            <div>
                Error:{error}
                </div>

        )
    }
    else {
        return(
            <div>
                {meals && meals.map((meal)=> <Meal key={meal.idMeal} meal={meal} />)}
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
      mealsbycategory: (category) => dispatch(mealsByCategory(category))


  })
export default connect(mapStateToProps,mapDispatchToProps)(Meals);

