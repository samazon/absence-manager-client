import React from 'react';
import { AbsenceStatus, Absence } from '@/constants/types';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import StatCard from './StatCard';
import styled from 'styled-components';

const StatsPanelWrapper = styled.div`
  border-radius: 0.8rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex: 0.7;
  font-size: 1.6rem;
  margin: 0 3rem 0 0;
  padding: 2.4rem;
  height: 100%;
`;

const SectionLabel = styled.h3`
  font-size: 2rem;
  margin: 0 0 2rem;
`;

const StatsPanel: React.FC = () => {
  const absences = useSelector<RootState, Absence[]>((state) =>
    Object.values(state.absence.data)
  );
  const confirmed = absences.filter(
    (absence) => absence.status === AbsenceStatus.CONFIRMED
  );
  const requested = absences.filter(
    (absence) => absence.status === AbsenceStatus.REQUESTED
  );
  const rejected = absences.filter(
    (absence) => absence.status === AbsenceStatus.REJECTED
  );

  return (
    <StatsPanelWrapper>
      <SectionLabel>Stats</SectionLabel>
      <StatCard label="Absences" value={absences.length} />
      <StatCard label={AbsenceStatus.REQUESTED} value={requested.length} />
      <StatCard label={AbsenceStatus.CONFIRMED} value={confirmed.length} />
      <StatCard label={AbsenceStatus.REJECTED} value={rejected.length} />
    </StatsPanelWrapper>
  );
};

export default StatsPanel;
