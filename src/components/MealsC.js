import className from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const sx = className 

const MealsC = ({meal}) => (
    <div>
         <Link to={`/meal/${meal.idMeal}`}>
    <img src={meal.strMealThumb} />
    <h4>
          {meal.strMeal}
        </h4>
        </Link>
    </div>
    
)
MealsC.propTypes ={
    meal:  PropTypes.objectOf(PropTypes.string).isRequired,
}

export default MealsC;


