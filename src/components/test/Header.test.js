
import { renderer } from '@testing-library/react';
import Header from './Header.test';
it('renders correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});