import React from 'react';
import { render, screen } from '@testing-library/react';

import Navbar from '@/components/common/navbar';

import '@testing-library/jest-dom';

describe('Describe navigation bar', () => {
  it('It should display course text', () => {
    const testText = 'Testing Course: You will learn something new!';
    render(<Navbar text={testText} />);

    const subtitle = screen.getByText(testText);
    expect(subtitle).toBeInTheDocument();
  });

  it('It should display a base value', () => {
    const baseText = 'Different knowledge in one place';
    render(<Navbar />);

    const subtitle = screen.getByText(baseText);
    expect(subtitle).toBeInTheDocument();
  });
});
