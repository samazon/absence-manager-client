import React from 'react';
import { render } from '@testing-library/react';
import NoRecordFound from '@/components/NoRecordFound';

describe('NoRecordFound component', () => {
  it('renders "No Record Found" text', () => {
    const { getByText } = render(<NoRecordFound />);
    expect(getByText('No Record Found.')).toBeInTheDocument();
  });

  it('renders the empty icon', () => {
    const { getByAltText } = render(<NoRecordFound />);
    expect(getByAltText('empty icon')).toBeInTheDocument();
  });
});
