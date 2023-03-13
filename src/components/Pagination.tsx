import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  page: number;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (pageNumber: number) => void;
}

const PaginationWrapper = styled.div`
  align-items: center;
  border-top: 1px solid #f5f5f5;
  bottom: 0;
  display: flex;
  flex-direction: row;
  font-size: 1.6rem;
  height: 50px;
  justify-content: space-between;
  left: 0;
  padding: 1rem 2.4rem;
  position: absolute;
  width: 100%;

  > p {
    display: inline;
  }
`;

const StyledPageButtons = styled.div`
  align-items: center;
  display: flex;

  p {
    font-size: 1.4rem;
    margin: 0 1rem;
  }

  button {
    background: white;
    border-radius: 4px;
    border: 1px solid #999;
    height: 20px;
    position: relative;
    width: 20px;

    svg {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
    }

    &:disabled {
      background-color: #d3d3d36c;
      cursor: not-allowed;
      svg {
        fill: gray;
      }
    }
  }
`;

const CustomSelect = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  p {
    font-size: 1.4rem;
    margin: 0 1rem 0 0;
  }

  select {
    border-radius: 4px;
    border: 1px solid #999;
    font-size: 1.4rem;
    height: 20px;
    width: 40px;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  page,
  currentPage,
  totalPages,
  pageSize,
  setPageSize,
  handlePrevClick,
  handleNextClick
}: PaginationProps) => {
  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPageSize(parseInt(event.target.value));
  };

  return (
    <PaginationWrapper>
      <StyledPageButtons>
        <button
          disabled={page === 1}
          onClick={handlePrevClick}
          data-testid="prev-button">
          <ChevronLeftIcon />
        </button>
        <p>
          {currentPage}/{totalPages}
        </p>
        <button
          disabled={page === totalPages}
          onClick={handleNextClick}
          data-testid="next-button">
          <ChevronRightIcon />
        </button>
      </StyledPageButtons>
      <CustomSelect>
        <p>Records per page:</p>
        <select
          data-testid="records-select"
          value={pageSize}
          onChange={handlePageSizeChange}>
          {[5, 10, 15].map((pages) => (
            <option key={pages} value={pages}>
              {pages}
            </option>
          ))}
        </select>
      </CustomSelect>
    </PaginationWrapper>
  );
};

export default Pagination;
