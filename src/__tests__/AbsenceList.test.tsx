import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AbsenceList from '@/components/AbsenceList';

const mockStore = configureMockStore([]);

describe('AbsenceList', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      absence: {
        data: {},
        isLoading: false,
        error: null
      },
      members: {
        data: {},
        isLoading: false,
        error: null
      }
    });
  });

  it('renders AbsenceList component', () => {
    render(
      <Provider store={store}>
        <AbsenceList />
      </Provider>
    );

    expect(screen.getByTestId('absence-list-wrapper')).toBeInTheDocument();
  });
});
