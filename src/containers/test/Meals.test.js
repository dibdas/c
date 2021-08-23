import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Meals from '../Meals';
import '../../actions/constants';

const mockStore = ConfigureMockStore([thunk]);
jest.mock('../../API/api');

test('should test for loading text', () => {
  const store = mockStore({
    meals: {
      meals: [],
      error: null,
    },
  });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Meals />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText('Loading ...')).toBeInTheDocument();
});

test('should test for error text', () => {
  const store = mockStore({
    meals: {
      meals: [],
      error: 'something went wrong.',
    },
  });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Meals />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText(/error meals /)).toBeInTheDocument();
});

test('should test for loaded meals', () => {
  const store = mockStore({
    meals: {
      meals: [
        {
          idMeal: '1',
          strMeal: 'Meal first',
        },
      ],

      error: null,
    },
  });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Meals />
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText('Meal first')).toBeInTheDocument();
});