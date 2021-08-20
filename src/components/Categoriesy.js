
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Categoriesy =({category})=>(
    <Link to={`/meals/${category.strCategory}`}>
         <img src={ category.strCategoryThumb } alt={category.strCategory} />
         <h4>
         {category.strCategory}
         </h4>
    </Link>
)
Categoriesy.prototypes ={
    category:  PropTypes.objectOf(PropTypes.string).isRequired,
}
export default Categoriesy ;
