import React from 'react';
import { render } from '@testing-library/react';
import Loader from '@/components/Loader';

describe('Loader', () => {
  it('renders the loader icon', () => {
    const { getByAltText } = render(<Loader />);
    const loaderIcon = getByAltText('loader image');
    expect(loaderIcon).toBeInTheDocument();
  });

  it('renders the loader wrapper', () => {
    const { getByTestId } = render(<Loader />);
    const loaderWrapper = getByTestId('loader-wrapper');
    expect(loaderWrapper).toBeInTheDocument();
  });
});
