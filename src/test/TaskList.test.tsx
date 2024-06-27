import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskList from '../components/TaskList';

const mockStore = configureStore([]);
const initialState = {
  tasks: {
    tasks: [
      { id: '1', description: 'Task 1' },
      { id: '2', description: 'Task 2' },
    ],
  },
};

describe('TaskList', () => {
  it('renders tasks correctly', () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('renders no tasks when the task list is empty', () => {
    const store = mockStore({
      tasks: {
        tasks: [],
      },
    });
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });
});
