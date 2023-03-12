/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { capitalize } from '@/utils/capitalizeFirst';
import React from 'react';
import styled from 'styled-components';

interface Props {
  name?: string;
  type?: string | undefined;
  period?: string;
  status?: string;
  memberNote?: string | null;
  admitterNote?: string | null;
}

const AbsenceCard = styled.div`
  border-radius: 0.4rem;
  border: 1px solid #fafafa;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  flex: calc(50% - 1.5rem);
  margin-bottom: 1.5rem;
  max-width: 49%;
  padding: 1.5rem 2rem;
  position: relative;

  &:nth-child(odd) {
    margin-right: 1.5rem;
  }

  strong {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.2rem;
  }

  .status {
    background-color: orange;
    border-radius: 30px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    padding: 5px 15px;
    position: absolute;
    right: 2rem;
    top: 1.5rem;

    &.Requested {
      background-color: rgb(176, 196, 222);
    }

    &.Confirmed {
      background-color: #32cd32;
    }

    &.Rejected {
      background-color: rgba(255, 0, 0, 0.924);
    }
  }
`;

const AbsenceListItem: React.FC<Props> = (props: Props) => {
  const { name, type, period, status, memberNote, admitterNote } = props;

  return (
    <AbsenceCard key={name}>
      <strong>{name}</strong>
      <p>Type: {capitalize(type!)}</p>
      <p>Period: {period}</p>
      <span className={`status ${status}`}>{status}</span>
      {memberNote && <p>Member note: {memberNote}</p>}
      {admitterNote && <p>Admitter note: {admitterNote}</p>}
    </AbsenceCard>
  );
};

export default AbsenceListItem;
