import className from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import search from '../containers/Search';
import styles from '../styles/Meal.css';
const sx = className 

const Meals = ({meal}) => (
    <div>
         <Link to={`/meal/${meal.idMeal}`}>
    <img className={sx('card-img')} src={meal.strMealThumb} alt={meal.strMeal} />
    <h4 className={cx('card-title')}>
          {meal.strMeal}
        </h4>
        </Link>
    </div>
    
)
Meals.prototypes ={
    meal:  PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Meals;


