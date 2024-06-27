import React from 'react';
// redux
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
// test
import { render, fireEvent, screen } from '@testing-library/react';
// components
import AddTaskModal from '../components/AddTaskModal';
import { addTask } from '../features/tasks/tasksSlice';

interface AppState {
  tasks: any[];
}

const mockStore = configureStore<AppState>([]);

describe('AddTaskModal', () => {
  let store: MockStoreEnhanced<AppState, {}>;
  let onCloseMock: jest.Mock;

  beforeEach(() => {
    store = mockStore({
      tasks: []
    });
    store.dispatch = jest.fn();
    onCloseMock = jest.fn();
  });

  const renderComponent = () => {
    render(
      <Provider store={store}>
        <AddTaskModal onClose={onCloseMock} />
      </Provider>
    );
  };

  it('renders correctly', () => {
    renderComponent();

    expect(screen.getByText('Add Task')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Task Name')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });

  it('calls onClose when Cancel button is clicked', () => {
    renderComponent();

    fireEvent.click(screen.getByText('Cancel'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('updates description state on input change', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('Enter Task Name') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
  });

  it('dispatches addTask and calls onClose when Add Task button is clicked with non-empty description', () => {
    renderComponent();
    const input = screen.getByPlaceholderText('Enter Task Name') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText('Add Task'));

    expect(store.dispatch).toHaveBeenCalledWith(addTask('New Task'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not dispatch addTask when Add Task button is clicked with empty description', () => {
    renderComponent();

    fireEvent.click(screen.getByText('Add Task'));

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
