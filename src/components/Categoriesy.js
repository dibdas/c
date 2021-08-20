import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import className from 'classnames';

const sx = className 
const Categoriesy =({categories})=>(
    <Link to={`/meals/${categories.strCategory}`}>
         <img src={ categories.strCategoryThumb } />
         <h4>
         {categories.strCategory}
         </h4>
        </Link>
)
Categoriesy.prototypes ={
    categories:  PropTypes.objectOf(PropTypes.string).isRequired,
}
export default Categoriesy ;
