import React from 'react';
import { render } from '@testing-library/react';
import StatsPanel from '@/components/StatsPanel';
import { AbsenceStatus } from '@/constants/types';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation((selector) =>
    selector({
      absence: {
        data: {
          1: {
            id: 1,
            startDate: '2022-03-14',
            endDate: '2022-03-15',
            status: AbsenceStatus.REQUESTED
          },
          2: {
            id: 2,
            startDate: '2022-03-16',
            endDate: '2022-03-17',
            status: AbsenceStatus.CONFIRMED
          },
          3: {
            id: 3,
            startDate: '2022-03-18',
            endDate: '2022-03-19',
            status: AbsenceStatus.REJECTED
          }
        }
      }
    })
  )
}));

describe('StatsPanel', () => {
  it('renders the expected StatCard components', () => {
    // Set up the mock data for useSelector
    const mockAbsences = [
      { id: 1, status: 'confirmed' },
      { id: 2, status: 'requested' },
      { id: 3, status: 'rejected' }
    ];
    (useSelector as jest.Mock).mockReturnValue(mockAbsences);

    // Render the component
    const { getByText } = render(<StatsPanel />);

    // Check that the expected StatCard components are rendered
    expect(getByText('Absences')).toBeInTheDocument();
    expect(getByText('Requested')).toBeInTheDocument();
    expect(getByText('Confirmed')).toBeInTheDocument();
    expect(getByText('Rejected')).toBeInTheDocument();
  });
});
