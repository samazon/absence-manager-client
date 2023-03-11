import { AbsenceStatus } from '@/constants/types';

export function statusChecker({
  confirmedAt,
  rejectedAt
}: {
  confirmedAt: string | null;
  rejectedAt: string | null;
}) {
  let result = AbsenceStatus.REQUESTED;
  if (confirmedAt !== null && rejectedAt === null) {
    result = AbsenceStatus.CONFIRMED;
  } else if (confirmedAt === null && rejectedAt !== null) {
    result = AbsenceStatus.REJECTED;
  }
  return result;
}
