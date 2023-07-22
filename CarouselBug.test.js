import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

test('clicking left arrow moves to previous image', () => {
  const { container } = render(<Carousel photos={[{ src: 'image1.jpg', caption: 'Image 1' }, { src: 'image2.jpg', caption: 'Image 2' }]} />);
  
  // Assuming we start on the first image
  // Simulate clicking right arrow to move to the second image
  const rightArrow = container.querySelector('.carousel-control-next');
  fireEvent.click(rightArrow);

  // Simulate clicking left arrow to move back to the first image
  const leftArrow = container.querySelector('.carousel-control-prev');
  fireEvent.click(leftArrow);

  // Get the current image index
  const imageIndex = container.querySelector('.carousel-item.active').dataset.index;
  
  // Expect the current image index to be 0 (the first image index)
  expect(Number(imageIndex)).toBe(0);
});

test('left arrow is missing on first image', () => {
  const { container } = render(<Carousel photos={[{ src: 'image1.jpg', caption: 'Image 1' }, { src: 'image2.jpg', caption: 'Image 2' }]} />);
  const leftArrow = container.querySelector('.carousel-control-prev');
  expect(leftArrow).toBeNull();
});

test('right arrow is missing on last image', () => {
  const { container } = render(<Carousel photos={[{ src: 'image1.jpg', caption: 'Image 1' }, { src: 'image2.jpg', caption: 'Image 2' }]} />);
  const rightArrow = container.querySelector('.carousel-control-next');
  expect(rightArrow).toBeNull();
});
