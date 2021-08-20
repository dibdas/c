
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Categoriesy from '../components/Categoriesy';

const Categories =({categories})=>(
    <div>
        {categories ? categories.map((category) => <Categoriesy key={categories.idCategory} category={category} />) : 'No categories'}
    </div>

)

Categories.defaultProps = {
    categories: [],
  };

Categories.prototypes ={
    categories:  PropTypes.objectOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    categories: state.categoryreducer,
  }
};
export default connect(mapStateToProps, null)(Categories);
