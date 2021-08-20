
import PropTypes from 'prop-types';
import grid from '../styles/grid.css';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Categoriesy from '../components/Categoriesy';

const sx = classNames.bind(grid)

const Categories =({categories})=>(
    <div>
        {categories ? categories.map((category) => <Categoriesy key={categories.idCategory} categories={categories} />) : 'No categories'}
    </div>

)

Categories.defaultProps = {
    categories: [],
  };

Categories.prototypes ={
    categories:  PropTypes.objectOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state) => ({
    categories: state.categories,
  });
export default connect(mapStateToProps)(Categories);