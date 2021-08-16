import PropTypes from 'prop-types';
import className from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const sx = className 
const Categories =({categories})=>(
    <Link to={`/meals/${category.strCategory}`}>
         <img src={categories.strCategoryThumb} />
         <h4>
         {categories.strCategory}
         </h4>

        </Link>

)

Categories.prototypes ={
    meal:  PropTypes.objectOf(PropTypes.string).isRequired,
}
export default Categories ;
