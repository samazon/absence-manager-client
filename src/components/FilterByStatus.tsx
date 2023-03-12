/* eslint-disable no-unused-vars */
import { FILTER_OPTIONS } from '@/constants/types';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface FilterByStatusProps {
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
}

const FilterDropDown = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  label {
    color: #333;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  select {
    height: 16px;
    width: 100px;
  }
`;

const FilterByStatus: React.FC<FilterByStatusProps> = ({
  selectedFilter,
  setSelectedFilter
}: FilterByStatusProps) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };
  return (
    <FilterDropDown>
      <label htmlFor="filter">Filter by status</label>
      <select
        id="filter"
        value={selectedFilter}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          handleFilterChange(e)
        }>
        {FILTER_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FilterDropDown>
  );
};

export default FilterByStatus;
