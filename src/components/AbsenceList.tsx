import { Absence } from '@/constants/types';
import AbsenceListItem from './AbsenceListItem';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { statusChecker } from '@/utils/statusChecker';

const AbsenceList: React.FC = () => {
  const absences = useSelector<RootState, Absence[]>((state) =>
    Object.values(state.absence.data)
  );

  const members = useSelector((state: RootState) => state.members.data);

  return (
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
  );
};

export default AbsenceList;
