interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
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
    <div>
      <p>
        Page {currentPage}/{totalPages}
      </p>
      <select value={currentPage} onChange={handlePageChange}>
        {pages.map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
