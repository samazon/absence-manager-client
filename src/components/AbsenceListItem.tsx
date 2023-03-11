import React from 'react';

interface Props {
  name?: string;
  type?: string;
  period?: string;
  status?: string;
  memberNote?: string | null;
  admitterNote?: string | null;
}

const AbsenceListItem: React.FC<Props> = (props: Props) => {
  const { name, type, period, status, memberNote, admitterNote } = props;

  return (
    <li key={name}>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Period: {period}</p>
      <p>Status: {status}</p>
      {memberNote && <p>Member note: {memberNote}</p>}
      {admitterNote && <p>Admitter note: {admitterNote}</p>}
    </li>
  );
};

export default AbsenceListItem;
