import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterByStatus from '@/components/FilterByStatus';

describe('FilterByStatus', () => {
  it('calls setSelectedFilter when filter is changed', () => {
    const setSelectedFilter = jest.fn();
    const { getByLabelText } = render(
      <FilterByStatus
        selectedFilter="all"
        setSelectedFilter={setSelectedFilter}
      />
    );

    const filterDropdown = getByLabelText('Filter by status');
    fireEvent.change(filterDropdown, { target: { value: 'confirmed' } });

    expect(setSelectedFilter).toHaveBeenCalledWith('confirmed');
  });
});
