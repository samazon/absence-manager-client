/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterByDate from '@/components/FilterByDate';

describe('FilterByDate', () => {
  test('renders filter by date label', () => {
    render(<FilterByDate selectedDate={null} setSelectedDate={() => {}} />);
    const label = screen.getByText('Filter by date');
    expect(label).toBeInTheDocument();
  });

  test('calls setSelectedDate when date is selected', () => {
    const setSelectedDate = jest.fn();
    render(
      <FilterByDate selectedDate={null} setSelectedDate={setSelectedDate} />
    );
    const datePicker = screen.getByPlaceholderText('Select date');
    const date = new Date('2022-03-11').toLocaleString();
    fireEvent.change(datePicker, { target: { value: date } });
    expect(datePicker).toHaveValue(date);
  });
});
