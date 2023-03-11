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
}

export interface Member {
  id: number;
  userId: number;
  crewId: number;
  name: string;
  image: string;
}

export const FILTER_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Approved', value: 'approved' },
  { label: 'Pending', value: 'pending' },
  { label: 'Rejected', value: 'rejected' }
];
