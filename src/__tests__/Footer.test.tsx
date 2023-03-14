import React from 'react';
import { render } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText('Crewmeister - Absence Manager © All rights reserved.')
    ).toBeInTheDocument();
  });

  it('renders the correct background color', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toHaveStyle('background: #ff9419');
  });
});
