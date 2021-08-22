

import { render } from '@testing-library/react';
import Categoriesy from '../Categoriesy';
import { BrowserRouter } from 'react-router-dom';
it('render component', () => {
    const category = {
      strCategory: 'chicken',
      strCategoryThumb: 'image',
    };
    const { tree } = render(
      <BrowserRouter>
        <Categoriesy category={category} />
      </BrowserRouter>,
    );
    expect(tree.textContent).toMatch({
        strCategory: expect.any('chicken'),
      strCategoryThumb: expect.any('image')
  });
})