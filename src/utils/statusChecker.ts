export function statusChecker({
  confirmedAt,
  rejectedAt
}: {
  confirmedAt: string | null;
  rejectedAt: string | null;
}) {
  let result = 'Requested';
  if (confirmedAt !== null && rejectedAt === null) {
    result = 'Confirmed';
  } else if (confirmedAt === null && rejectedAt !== null) {
    result = 'Rejected';
  }
  return result;
}
