import React from 'react';
import { render } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Crewmeister')).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Crewmeister logo')).toBeInTheDocument();
  });
});
