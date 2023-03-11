import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import membersReducer from './membersSlice';
import absenceReducer from './absenceSlice';

const store = configureStore({
  reducer: {
    members: membersReducer,
    absence: absenceReducer
  },
  middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
