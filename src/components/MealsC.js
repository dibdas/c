
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




const MealsC = ({meal}) => (
    <div className="container row ">
        <Link to={`/meal/${meal.idMeal}`}><img src={meal.strMealThumb} className="col-3" alt={meal.strMeal}/><h4 className="mx-2">{meal.strMeal}</h4></Link>
    </div>
    
)
MealsC.propTypes ={
    meal:  PropTypes.objectOf(PropTypes.string).isRequired,
}

export default MealsC;


