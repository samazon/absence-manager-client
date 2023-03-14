import absenceReducer, { getAbsencesSuccess } from '@/store/absenceSlice';

describe('absenceSlice', () => {
  describe('getAbsencesSuccess', () => {
    it('should update state correctly', () => {
      const initialState = {
        data: {},
        isLoading: true,
        error: null
      };

      const payload = [
        { id: '1', confirmedAt: null, rejectedAt: null },
        { id: '2', confirmedAt: '2022-03-10T00:00:00Z', rejectedAt: null }
      ];

      const action = { type: getAbsencesSuccess.type, payload };

      const state = absenceReducer(initialState, action);

      expect(state.isLoading).toEqual(false);
      expect(state.error).toEqual(null);
      expect(state.data).toEqual({
        '1': {
          id: '1',
          confirmedAt: null,
          rejectedAt: null,
          status: 'Requested'
        },
        '2': {
          id: '2',
          confirmedAt: '2022-03-10T00:00:00Z',
          rejectedAt: null,
          status: 'Confirmed'
        }
      });
    });
  });
});
