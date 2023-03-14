import membersReducer, {
  addMember,
  deleteMember,
  getMembersFailure,
  getMembersStart,
  getMembersSuccess,
  initialState,
  updateMember
} from '@/store/membersSlice';

describe('membersSlice', () => {
  test('should return the initial state', () => {
    expect(membersReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  test('should set isLoading to true when getMembersStart is called', () => {
    const newState = membersReducer(initialState, getMembersStart());
    expect(newState.isLoading).toEqual(true);
    expect(newState.error).toBeNull();
  });

  test('should update state correctly when getMembersSuccess is called', () => {
    const members = [
      { id: 1, userId: 1, name: 'Alice' },
      { id: 2, userId: 2, name: 'Bob' }
    ];
    const newState = membersReducer(initialState, getMembersSuccess(members));
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toBeNull();
    expect(newState.data).toEqual({
      1: members[0],
      2: members[1]
    });
  });

  test('should update state correctly when getMembersFailure is called', () => {
    const error = 'Failed to fetch members';
    const newState = membersReducer(initialState, getMembersFailure(error));
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toEqual(error);
  });

  test('should add a member to state when addMember is called', () => {
    const member = { id: 1, userId: 1, name: 'Alice' };
    const newState = membersReducer(initialState, addMember(member));
    expect(newState.data).toEqual({ [member.userId]: member });
  });

  test('should update a member in state when updateMember is called', () => {
    const oldMember = { id: 1, userId: 1, name: 'Alice' };
    const newMember = { ...oldMember, name: 'Alice Abigail' };
    const oldState = {
      ...initialState,
      data: { [oldMember.userId]: oldMember }
    };
    const newState = membersReducer(oldState, updateMember(newMember));
    expect(newState.data).toEqual({ [newMember.userId]: newMember });
  });

  test('should delete a member from state when deleteMember is called', () => {
    const member = { id: 1, userId: 1, name: 'Alice' };
    const oldState = { ...initialState, data: { [member.userId]: member } };
    const newState = membersReducer(oldState, deleteMember(member.userId));
    expect(newState.data).toEqual({});
  });
});
