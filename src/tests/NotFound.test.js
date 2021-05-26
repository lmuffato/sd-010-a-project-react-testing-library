import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

// getByLabelText e getByAltText consultados na documentação
// https://testing-library.com/docs/dom-testing-library/cheatsheet/
describe('Component NotFound.js tests', () => {
  test('There is a h2 heading with text: Page requested not found 😭', () => {
    const { getByRole, getByLabelText } = render(<NotFound />);

    const heading = getByRole('heading', {
      name: /Page requested not found/,
      level: 2,
    });

    const cryingEmoji = getByLabelText('Crying emoji');
    expect(heading).toBeInTheDocument();
    expect(cryingEmoji).toBeInTheDocument();
  });

  test('There is an certain img', () => {
    const { getByAltText } = render(<NotFound />);

    const img = getByAltText('Pikachu crying because the page requested was not found');
    expect(img).toBeInTheDocument();
    expect(img.src).toMatch(/kNSeTs31XBZ3G/);
  });
});
