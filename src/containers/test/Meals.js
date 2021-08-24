/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Meals from '../Meals';

const mockStore = ConfigureMockStore([thunk]);
jest.mock('../../actions/index.js');

test('should test for loading text', () => {
  const store = mockStore({
    meals: {
      meals: [],
      status: LOADING_MEALS,
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
