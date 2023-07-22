import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel';

test('renders Carousel component without errors', () => {
  render(<Carousel />);
});

test('matches Carousel component snapshot', () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});
