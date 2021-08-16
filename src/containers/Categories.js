
import PropTypes from 'prop-types';
import grid from '../styles/grid.css';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Categories from '../components/Categories';

const sx = classNames.bind(grid)

const Categories =({categories})=>(
    <div>
        {categories ? categories.map((category) => <Categories key={categories.idCategory} categories={categories} />) : 'No categories'}
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