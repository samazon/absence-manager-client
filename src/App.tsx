import { useEffect } from 'react';
import { getAbsences, getMembers } from './api';
import AbsenceList from './components/AbsenceList';
import { useDispatch } from 'react-redux';
import {
  getAbsencesFailure,
  getAbsencesStart,
  getAbsencesSuccess
} from './store/absenceSlice';
import {
  getMembersFailure,
  getMembersStart,
  getMembersSuccess
} from './store/membersSlice';

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
    <div className="App text-center">
      <h1 className="text-gray-500">Crewmeister - React coding challenge</h1>
      <AbsenceList />
    </div>
  );
}

export default App;
