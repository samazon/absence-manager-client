import React from 'react';
import AbsenceList from './AbsenceList';

import styled from 'styled-components';

const AbsencesPanelWrapper = styled.div`
  border-radius: 0.8rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex: 2.3;
  font-size: 1.6rem;
  margin: 0 3rem 0 0;
  padding: 2.4rem 2.4rem 5rem;
  position: relative;
`;

const SectionLabel = styled.h3`
  font-size: 2rem;
  margin: 0 0 2rem;
`;

const AbsencesPanel: React.FC = () => {
  return (
    <AbsencesPanelWrapper>
      <SectionLabel>Absences</SectionLabel>
      <AbsenceList />
    </AbsencesPanelWrapper>
  );
};

export default AbsencesPanel;
