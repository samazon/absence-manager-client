/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import { RootState } from '@/store/index';
import { Absence, FILTER_OPTIONS } from '@/constants/types';

import AbsenceListItem from './AbsenceListItem';
import Pagination from './Pagination';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type AbsenceListProps = {
  pageSize?: number;
};

const AbsenceList: React.FC<AbsenceListProps> = ({
  pageSize = 10
}: AbsenceListProps) => {
  const [page, setPage] = useState(1);
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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
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
      return absence.status.toLowerCase() === selectedFilter;
    }
    return (
      absence.status.toLowerCase() === selectedFilter &&
      format(new Date(absence.startDate), 'yyyy-MM-dd') ===
        format(selectedDate!, 'yyyy-MM-dd')
    );
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
      <div>
        <label htmlFor="date-picker">Filter by date:</label>
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          isClearable
          placeholderText="Select date"
        />
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
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
