import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Categoriesy from '../Categoriesy';

it('render component', () => {
  const category = {
    strCategory: 'chicken',
    strCategoryThumb: 'image',
  };
  const { getByText } = render(
    <BrowserRouter>
      <Categoriesy category={category} />
    </BrowserRouter>,
  );
  expect(getByText('chicken')).toBeInTheDocument();
});
