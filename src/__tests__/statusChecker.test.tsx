import { AbsenceStatus } from '@/constants/types';
import { statusChecker } from '@/utils/statusChecker';

describe('statusChecker function', () => {
  it('should return REQUESTED if both confirmedAt and rejectedAt are null', () => {
    const result = statusChecker({ confirmedAt: null, rejectedAt: null });
    expect(result).toBe(AbsenceStatus.REQUESTED);
  });

  it('should return CONFIRMED if confirmedAt is not null and rejectedAt is null', () => {
    const result = statusChecker({
      confirmedAt: '2022-01-01',
      rejectedAt: null
    });
    expect(result).toBe(AbsenceStatus.CONFIRMED);
  });

  it('should return REJECTED if confirmedAt is null and rejectedAt is not null', () => {
    const result = statusChecker({
      confirmedAt: null,
      rejectedAt: '2022-01-01'
    });
    expect(result).toBe(AbsenceStatus.REJECTED);
  });

  it('should return REQUESTED if confirmedAt and rejectedAt are both not null', () => {
    const result = statusChecker({
      confirmedAt: '2022-01-01',
      rejectedAt: '2022-01-02'
    });
    expect(result).toBe(AbsenceStatus.REQUESTED);
  });
});
