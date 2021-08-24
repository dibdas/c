import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MealsC from '../MealsC';

test('render component', () => {
  const food = {
    idMeal: '487',
    strMeal: 'Meal name',
    strMealThumb: 'image path',
  };
  const { getByText } = render(
    <MemoryRouter>
      <MealsC meal={food} />
    </MemoryRouter>,
  );

  expect(getByText('Meal name')).toBeInTheDocument();
});

test('do not render component', () => {
  const food = {
    idMeal: '487',
    strMeal: 'piegon',
    strMealThumb: 'image path',
  };
  const { queryByText } = render(
    <MemoryRouter>
      <MealsC meal={food} />
    </MemoryRouter>,
  );

  expect(queryByText('i, pigeon')).not.toBeInTheDocument();
});
