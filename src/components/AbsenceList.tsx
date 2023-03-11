import { Absence, FILTER_OPTIONS } from '@/constants/types';
import AbsenceListItem from './AbsenceListItem';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Pagination from './Pagination';

type AbsenceListProps = {
  pageSize?: number;
};

const AbsenceList: React.FC<AbsenceListProps> = ({
  pageSize = 10
}: AbsenceListProps) => {
  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const absences = useSelector<RootState, Absence[]>((state) =>
    Object.values(state.absence.data).slice(
      (page - 1) * pageSize,
      page * pageSize
    )
  );
  const totalAbsences = useSelector<RootState, Absence[]>((state) =>
    Object.values(state.absence.data)
  );
  const totalPages = Math.ceil(totalAbsences.length / pageSize);
  const members = useSelector((state: RootState) => state.members.data);

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const filteredAbsences = absences.filter((absence) => {
    if (selectedFilter === 'all') {
      return true;
    }
    return absence.status.toLowerCase() === selectedFilter;
  });

  return (
    <>
      <div className="filter-dropdown">
        <label htmlFor="filter">Filter by status:</label>
        <select
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}>
          {FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
      <button disabled={page === 1} onClick={handlePrevClick}>
        Previous Page
      </button>
      <button disabled={page === totalPages} onClick={handleNextClick}>
        Next Page
      </button>
      {!filteredAbsences.length && <div>No Record Found!</div>}
      <ul className="flex flex-wrap flex-col justify-center">
        {filteredAbsences &&
          filteredAbsences.map((absence) => {
            return (
              <AbsenceListItem
                name={members[absence.userId].name}
                key={absence.id}
                period={`${absence.startDate} - ${absence.endDate}`}
                type={absence.type}
                status={absence.status}
                memberNote={absence.memberNote}
                admitterNote={absence.admitterNote}
              />
            );
          })}
      </ul>
    </>
  );
};

export default AbsenceList;
