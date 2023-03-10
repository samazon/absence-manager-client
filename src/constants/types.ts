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
