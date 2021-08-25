/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Categoriesy = ({ category }) => (
  <div className="col-12 col-md-6 d-flex justify-content-center border rounded">
    <Link
      to={`/meals/${category.strCategory}`}
      className="d-flex flex-column justify-content-evenly
              align-items-center p-5 text-decoration-none"
    >
      <img src={category.strCategoryThumb} alt={category.strCategory} className="col" />
      <h4 className="h5 pt-5">
        {category.strCategory}
      </h4>
    </Link>
  </div>
);
Categoriesy.prototypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Categoriesy;
