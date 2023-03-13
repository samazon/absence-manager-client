import { render, fireEvent } from '@testing-library/react';
import Pagination from '@/components/Pagination';

describe('Pagination', () => {
  const defaultProps = {
    page: 1,
    currentPage: 1,
    totalPages: 3,
    pageSize: 10,
    setPageSize: jest.fn(),
    handlePrevClick: jest.fn(),
    handleNextClick: jest.fn(),
    onPageChange: jest.fn()
  };

  it('should render pagination buttons', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);
    const prevButton = getByTestId('prev-button');
    const nextButton = getByTestId('next-button');
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('should disable the prev button when on the first page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} page={1} />);
    const prevButton = getByTestId('prev-button');
    expect(prevButton).toBeDisabled();
  });

  it('should disable the next button when on the last page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} page={3} />);
    const nextButton = getByTestId('next-button');
    expect(nextButton).toBeDisabled();
  });

  test('should call the handleNextClick function when the next button is clicked', () => {
    const handleNextClickMock = jest.fn();
    const { getByTestId } = render(
      <Pagination {...defaultProps} handleNextClick={handleNextClickMock} />
    );

    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);

    expect(handleNextClickMock).toHaveBeenCalled();
  });

  test('should call the handlePrevClick function when the next button is clicked', () => {
    const handlePrevClickMock = jest.fn();
    const { getByTestId } = render(
      <Pagination
        {...defaultProps}
        handlePrevClick={handlePrevClickMock}
        page={2}
      />
    );

    const prevButton = getByTestId('prev-button');
    expect(prevButton).not.toBeDisabled();
    fireEvent.click(prevButton);
    expect(handlePrevClickMock).toHaveBeenCalled();
  });

  it('should render the current page and total pages', () => {
    const { getByText } = render(<Pagination {...defaultProps} />);
    const pageInfo = getByText('1/3');
    expect(pageInfo).toBeInTheDocument();
  });

  it('should call the setPageSize function when the records per page select is changed', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);
    const select = getByTestId('records-select');
    fireEvent.change(select, { target: { value: '15' } });
    expect(defaultProps.setPageSize).toHaveBeenCalledWith(15);
  });
});
