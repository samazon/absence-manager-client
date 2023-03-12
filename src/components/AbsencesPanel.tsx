import React from 'react';
import AbsenceList from './AbsenceList';

import styled from 'styled-components';

const AbsencesPanelWrapper = styled.div`
  border-radius: 0.8rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  flex: 2.3;
  font-size: 1.6rem;
  padding: 7rem 2.4rem 5rem;
  position: relative;
`;

const SectionLabel = styled.h3`
  font-size: 2rem;
  left: 2.4rem;
  position: absolute;
  top: 30px;
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
