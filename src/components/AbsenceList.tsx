import { Absence } from '@/constants/types';
import AbsenceListItem from './AbsenceListItem';

interface Props {
  absences: Absence[];
}

const AbsenceList: React.FC<Props> = ({ absences }: Props) => {
  function statusChecker(
    confirmedAt: string | null,
    rejectedAt: string | null
  ) {
    let result = 'Requested';
    if (confirmedAt !== null && rejectedAt === null) {
      result = 'Confirmed';
    } else if (confirmedAt === null && rejectedAt !== null) {
      result = 'Rejected';
    }
    return result;
  }
  return (
    <ul className="flex flex-wrap flex-col ">
      {absences.map((absence) => (
        <AbsenceListItem
          key={absence.id}
          period={`${absence.startDate} - ${absence.endDate}`}
          type={absence.type}
          status={statusChecker(absence.confirmedAt, absence.rejectedAt)}
          memberNote={absence.memberNote}
          admitterNote={absence.admitterNote}
        />
      ))}
    </ul>
  );
};

export default AbsenceList;
