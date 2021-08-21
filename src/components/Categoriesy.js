
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Categoriesy =({category})=>(
    <div className="d-flex">
    <Link to={`/meals/${category.strCategory}`} className="w-100">
         <img src={ category.strCategoryThumb } alt={category.strCategory} />
         <h4>
         {category.strCategory}
         </h4>
    </Link>
    </div>
)
Categoriesy.prototypes ={
    category:  PropTypes.objectOf(PropTypes.string).isRequired,
}
export default Categoriesy ;
