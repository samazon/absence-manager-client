// membersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Member } from '@/constants/types';

interface MembersState {
  data: { [id: number]: Member };
  isLoading: boolean;
  error: string | null;
}

const initialState: MembersState = {
  data: {},
  isLoading: false,
  error: null
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    getMembersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getMembersSuccess(state, action: PayloadAction<Member[]>) {
      state.isLoading = false;
      state.data = {};
      action.payload.forEach((member) => {
        state.data[member.userId] = member;
      });
    },
    getMembersFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addMember(state, action: PayloadAction<Member>) {
      state.data[action.payload.id] = action.payload;
    },
    updateMember(state, action: PayloadAction<Member>) {
      state.data[action.payload.id] = action.payload;
    },
    deleteMember(state, action: PayloadAction<number>) {
      delete state.data[action.payload];
    }
  }
});

export const {
  getMembersStart,
  getMembersSuccess,
  getMembersFailure,
  addMember,
  updateMember,
  deleteMember
} = membersSlice.actions;

export default membersSlice.reducer;
