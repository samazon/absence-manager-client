import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import styled from 'styled-components';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  page: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (pageNumber: number) => void;
}

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 1.6rem;
  border-top: 1px solid #f5f5f5;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2.4rem;
  > p {
    display: inline;
  }
`;

const StyledPageButtons = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.4rem;
    margin: 0 1rem;
  }

  button {
    width: 20px;
    height: 20px;
    background: white;
    border: 1px solid #999;
    border-radius: 4px;
    position: relative;

    svg {
      width: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:disabled {
      cursor: not-allowed;
      svg {
        fill: gray;
      }
    }
  }
`;

const CustomSelect = styled.div`
  position: relative;

  select {
    height: 20px;
    width: 100px;
    font-size: 1.4rem;
    border: 1px solid #999;
    border-radius: 4px;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  page,
  currentPage,
  totalPages,
  onPageChange,
  handlePrevClick,
  handleNextClick
}: PaginationProps) => {
  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPageChange(parseInt(event.target.value));
  };

  const getPages = () => {
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPages();

  return (
    <PaginationWrapper>
      <StyledPageButtons>
        <button disabled={page === 1} onClick={handlePrevClick}>
          <ChevronLeftIcon />
        </button>
        <p>
          {currentPage}/{totalPages}
        </p>
        <button disabled={page === totalPages} onClick={handleNextClick}>
          <ChevronRightIcon />
        </button>
      </StyledPageButtons>
      <CustomSelect>
        <select value={currentPage} onChange={handlePageChange}>
          {pages.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </CustomSelect>
    </PaginationWrapper>
  );
};

export default Pagination;
