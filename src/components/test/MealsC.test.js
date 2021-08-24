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

  // expect(container.textContent).toMatch(food.strMeal);
  expect(getByText('Meal name')).toBeInTheDocument();
});
