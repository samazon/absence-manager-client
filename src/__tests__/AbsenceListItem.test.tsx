import { render } from '@testing-library/react';
import AbsenceListItem from '@/components/AbsenceListItem';

describe('AbsenceListItem', () => {
  const props = {
    name: 'John Doe',
    type: 'sick',
    period: '2022-03-15 - 2022-03-16',
    status: 'Requested',
    memberNote: 'Feeling very sick',
    admitterNote: null
  };

  it('should render the name, type, period, and status of the absence', () => {
    const { getByText } = render(<AbsenceListItem {...props} />);
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Type: Sick')).toBeInTheDocument();
    expect(getByText('Period: 2022-03-15 - 2022-03-16')).toBeInTheDocument();
    expect(getByText('Requested')).toHaveClass('status');
  });

  it('should render the member note if present', () => {
    const { getByText } = render(<AbsenceListItem {...props} />);
    expect(getByText('Member note: Feeling very sick')).toBeInTheDocument();
  });

  it('should not render the admitter note if not present', () => {
    const { queryByText } = render(<AbsenceListItem {...props} />);
    expect(queryByText('Admitter note:')).not.toBeInTheDocument();
  });
});
