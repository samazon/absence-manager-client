/* eslint-disable no-unused-vars */
export interface Absence {
  admitterId: number | null;
  admitterNote?: string | null;
  crewId: number;
  endDate: string;
  id: number;
  memberNote?: string | null;
  rejectedAt: string | null;
  confirmedAt: string | null;
  startDate: string;
  type: string;
  userId: number;
  status?: string | undefined;
}

export interface Member {
  id: number;
  userId: number;
  crewId?: number;
  name: string;
  image?: string;
}

export const FILTER_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Confirmed', value: 'confirmed' },
  { label: 'Requested', value: 'requested' },
  { label: 'Rejected', value: 'rejected' }
];

export enum AbsenceStatus {
  REQUESTED = 'Requested',
  CONFIRMED = 'Confirmed',
  REJECTED = 'Rejected'
}
