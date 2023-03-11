import { Absence } from '@/constants/types';
import AbsenceListItem from './AbsenceListItem';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { statusChecker } from '@/utils/statusChecker';
import { useState } from 'react';
import Pagination from './Pagination';

type AbsenceListProps = {
  pageSize?: number;
};

const AbsenceList: React.FC<AbsenceListProps> = ({
  pageSize = 10
}: AbsenceListProps) => {
  const [page, setPage] = useState(1);

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

  console.log(totalPages);

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

  return (
    <>
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

      <ul className="flex flex-wrap flex-col justify-center">
        {absences &&
          absences.map((absence) => {
            return (
              <AbsenceListItem
                name={members[absence.userId].name}
                key={absence.id}
                period={`${absence.startDate} - ${absence.endDate}`}
                type={absence.type}
                status={statusChecker({
                  confirmedAt: absence.confirmedAt,
                  rejectedAt: absence.rejectedAt
                })}
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
