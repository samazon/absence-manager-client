/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import styled from 'styled-components';

import { RootState } from '@/store/index';
import { Absence } from '@/constants/types';

import AbsenceListItem from './AbsenceListItem';
import Pagination from './Pagination';
import FilterByStatus from './FilterByStatus';
import FilterByDate from './FilterByDate';
import NoRecordFound from './NoRecordFound';
import Loader from './Loader';
import { getAbsencesFailure } from '@/store/absenceSlice';

const FiltersWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  font-size: 1.6rem;
  justify-content: flex-end;
  left: 0;
  margin: 0 0 30px;
  padding: 1.5rem 2.4rem;
  position: absolute;
  top: 0;
  width: 100%;
`;

const AbsencesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0px 0;

  * {
    font-size: 1.6rem;
  }
`;

const AbsenceList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const absences = useSelector<RootState, Absence[]>((state) =>
    Object.values(state.absence.data).slice(
      (page - 1) * pageSize,
      page * pageSize
    )
  );
  const totalAbsences = useSelector<RootState, Absence[]>((state) =>
    Object.values(state.absence.data)
  );
  const isAbsenceLoading = useSelector<RootState>(
    (state) => state.absence.isLoading
  );
  const totalPages = Math.ceil(totalAbsences.length / pageSize);
  const members = useSelector((state: RootState) => state.members.data);

  const isAbsenceError = useSelector<RootState>((state) => {
    return state.absence.error;
  });
  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const filteredAbsences = absences.filter((absence) => {
    if (selectedFilter === 'all' && !selectedDate) {
      return true;
    }
    if (selectedFilter === 'all') {
      return (
        format(new Date(absence.startDate), 'yyyy-MM-dd') ===
        format(selectedDate!, 'yyyy-MM-dd')
      );
    }
    if (!selectedDate) {
      return absence?.status?.toLowerCase() === selectedFilter;
    }
    return (
      absence?.status?.toLowerCase() === selectedFilter &&
      format(new Date(absence.startDate), 'yyyy-MM-dd') ===
        format(selectedDate!, 'yyyy-MM-dd')
    );
  });

  return (
    <>
      <FiltersWrapper>
        <FilterByDate
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <FilterByStatus
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </FiltersWrapper>
      <Pagination
        page={page}
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
      {isAbsenceLoading && !filteredAbsences.length && <Loader />}
      {!isAbsenceLoading && !filteredAbsences.length && <NoRecordFound />}
      {isAbsenceError &&
        !isAbsenceLoading &&
        !filteredAbsences.length &&
        alert('Opps! Sorry something went')}
      <AbsencesListWrapper data-testid="absence-list-wrapper">
        {filteredAbsences &&
          filteredAbsences.map((absence) => {
            return (
              <AbsenceListItem
                name={members[absence.userId].name}
                key={absence.id}
                period={`${absence.startDate} to ${absence.endDate}`}
                type={absence.type}
                status={absence.status}
                memberNote={absence.memberNote}
                admitterNote={absence.admitterNote}
              />
            );
          })}
      </AbsencesListWrapper>
    </>
  );
};

export default AbsenceList;
