import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import membersReducer from '@/store/membersSlice';
import absenceReducer from '@/store/absenceSlice';
import store, { RootState } from '@/store/index';

describe('store', () => {
  let testStore = store;

  beforeEach(() => {
    testStore = configureStore({
      reducer: {
        members: membersReducer,
        absence: absenceReducer
      },
      middleware: [thunkMiddleware],
      devTools: false
    });
  });

  test('should have members and absence reducers', () => {
    const state: RootState = testStore.getState();
    expect(state.members).toBeDefined();
    expect(state.absence).toBeDefined();
  });
});
