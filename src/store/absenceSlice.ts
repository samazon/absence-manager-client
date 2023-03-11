// absenceSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Absence } from '@/constants/types';

interface AbsenceState {
  data: { [id: string]: Absence };
  isLoading: boolean;
  error: string | null;
}

const initialState: AbsenceState = {
  data: {},
  isLoading: false,
  error: null
};

const absenceSlice = createSlice({
  name: 'absence',
  initialState,
  reducers: {
    getAbsencesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getAbsencesSuccess(state, action: PayloadAction<Absence[]>) {
      state.isLoading = false;
      state.data = {};
      action.payload.forEach((absence) => {
        state.data[absence.id] = absence;
      });
    },
    getAbsencesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addAbsence(state, action: PayloadAction<Absence>) {
      state.data[action.payload.id] = action.payload;
    },
    updateAbsence(state, action: PayloadAction<Absence>) {
      state.data[action.payload.id] = action.payload;
    },
    deleteAbsence(state, action: PayloadAction<string>) {
      delete state.data[action.payload];
    }
  }
});

export const {
  getAbsencesStart,
  getAbsencesSuccess,
  getAbsencesFailure,
  addAbsence,
  updateAbsence,
  deleteAbsence
} = absenceSlice.actions;

export default absenceSlice.reducer;
