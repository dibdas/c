
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const MealsC = ({meal}) => (
    <div>
         <Link to={`/meal/${meal.idMeal}`}>
    <img src={meal.strMealThumb} alt={meal.strMeal}/>
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


