import React from 'react';
import { render, screen } from '@testing-library/react';
import StatCard from '@/components/StatCard';

describe('StatCard component', () => {
  test('renders label and value correctly', () => {
    const label = 'Total Members';
    const value = 10;
    render(<StatCard label={label} value={value} />);
    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(value.toString());
    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
