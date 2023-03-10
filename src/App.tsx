import { useEffect, useState } from 'react';
import { Absence } from '@/constants/types';
import { getAbsences } from './api';
import AbsenceList from './components/AbsenceList';

function App() {
  const [absences, setAbsences] = useState<Absence[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAbsences().then((absences) => {
      setAbsences(absences);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App text-center">
      <h1 className="text-gray-500">Crewmeister - React coding challenge</h1>
      {isLoading ? 'Loading...' : <AbsenceList absences={absences} />}
    </div>
  );
}

export default App;
