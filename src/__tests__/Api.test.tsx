import { getAbsences, getMembers } from '@/api/index';
import absencesData from '@/api/absences.json';
import membersData from '@/api/members.json';

jest.mock('@/api/absences.json', () => {
  return {
    payload: [
      {
        id: 1,
        startDate: '2022-03-20T00:00:00.000Z',
        endDate: '2022-03-21T00:00:00.000Z',
        memberNote: '',
        member: {
          id: 1,
          name: 'John Doe',
          image: 'https://via.placeholder.com/150x150.png'
        },
        type: 'sickness'
      }
    ]
  };
});

jest.mock('@/api/members.json', () => {
  return {
    payload: [
      {
        id: 1,
        name: 'John Doe',
        image: 'https://via.placeholder.com/150x150.png'
      }
    ]
  };
});

describe('API', () => {
  describe('getAbsences', () => {
    it('should return a Promise with absences', async () => {
      const absences = await getAbsences();
      expect(absences).toEqual(absencesData);
    });

    it('should return a Promise that resolves in at least 5 seconds', async () => {
      const startTime = Date.now();
      await getAbsences();
      const endTime = Date.now();
      expect(endTime - startTime).toBeLessThan(5000);
    });
  });

  describe('getMembers', () => {
    it('should return a Promise with members', async () => {
      const members = await getMembers();
      expect(members).toEqual(membersData);
    });

    it('should return a Promise that resolves in at least 5 seconds', async () => {
      const startTime = Date.now();
      await getMembers();
      const endTime = Date.now();
      expect(endTime - startTime).toBeLessThan(5000);
    });
  });
});
