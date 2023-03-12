/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

interface FilterByDateProps {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const FilterDropdown = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-right: 1rem;

  label {
    color: #333;
    font-size: 0.8;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1rem;
    height: 16px;
    width: 100px;
  }
`;

const FilterByDate: React.FC<FilterByDateProps> = ({
  selectedDate,
  setSelectedDate
}: FilterByDateProps) => {
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <FilterDropdown>
      <label htmlFor="date-picker">Filter by date</label>
      <ReactDatePicker
        id="date-picker"
        selected={selectedDate}
        onChange={(date: Date | null): void => handleDateChange(date)}
        dateFormat="yyyy-MM-dd"
        isClearable
        placeholderText="Select date"
      />
    </FilterDropdown>
  );
};

export default FilterByDate;
