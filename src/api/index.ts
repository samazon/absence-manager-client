import { Absence, Member } from '@/constants/types';
import absencesData from './absences.json';
import membersData from './members.json';

const FAKE_API_DELAY_MS = 1000;

export function getAbsences(): Promise<Absence[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(absencesData?.payload);
    }, FAKE_API_DELAY_MS);
  });
}

export function getMembers(): Promise<Member[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(membersData?.payload);
    }, FAKE_API_DELAY_MS);
  });
}
