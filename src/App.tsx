import { useEffect } from 'react';
import { getAbsences, getMembers } from './api';
import { useDispatch } from 'react-redux';
import {
  getAbsencesFailure,
  getAbsencesStart,
  getAbsencesSuccess
} from '@/store/absenceSlice';
import {
  getMembersFailure,
  getMembersStart,
  getMembersSuccess
} from '@/store/membersSlice';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import StatsPanel from '@/components/StatsPanel';
import AbsencesPanel from '@/components/AbsencesPanel';

import styled from 'styled-components';

const MainElement = styled.main`
  min-height: 900px;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex: 1 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  margin: 0 0 1.2rem;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersStart());
    dispatch(getAbsencesStart());

    getMembers()
      .then((members) => dispatch(getMembersSuccess(members)))
      .catch((err) => getMembersFailure(err));
    getAbsences()
      .then((absences) => dispatch(getAbsencesSuccess(absences)))
      .catch((err) => dispatch(getAbsencesFailure(err)));
  }, []);

  return (
    <>
      <Header />
      <MainElement>
        <Container>
          <SectionTitle>Absence Manager</SectionTitle>
          <SectionsWrapper>
            <StatsPanel />
            <AbsencesPanel />
          </SectionsWrapper>
        </Container>
      </MainElement>
      <Footer />
    </>
  );
}

export default App;
