/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { capitalize } from '@/utils/capitalizeFirst';
import { downloadICal } from '@/utils/dowloadIcal';
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
    border-style: solid;
    border-width: 1px;
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 5px 15px;
    position: absolute;
    right: 2rem;
    text-transform: uppercase;
    top: 1.5rem;

    &.Requested {
      background: #e6f4ff;
      border-color: #0958d9;
      color: #0958d9;
    }

    &.Confirmed {
      background: #f6ffed;
      border-color: #389e0d;
      color: #389e0d;
    }

    &.Rejected {
      background: #fff1f0;
      border-color: #cf1322;
      color: #cf1322;
    }
  }
`;

const AddToCalendarButton = styled.button`
  border-radius: 4px;
  border: 0;
  border: 1px solid #999;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0.5rem 1.5rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #ff9419;
    border-color: #ff9419;
    color: white;
  }
`;

const AbsenceListItem: React.FC<Props> = (props: Props) => {
  const { name, type, period, status, memberNote, admitterNote } = props;

  const record = {
    memberName: name,
    type,
    startDate: period?.split(' ')[0],
    endDate: period?.split(' ')[2],
    memberNote
  };

  return (
    <AbsenceCard key={name}>
      <strong>{name}</strong>
      <p>Type: {capitalize(type!)}</p>
      <p data-testid="period-text">Period: {period}</p>
      <span className={`status ${status}`}>{status}</span>
      {memberNote && <p>Member note: {memberNote}</p>}
      {admitterNote && <p>Admitter note: {admitterNote}</p>}

      <AddToCalendarButton onClick={() => downloadICal(record)}>
        Add to Calender
      </AddToCalendarButton>
    </AbsenceCard>
  );
};

export default AbsenceListItem;
