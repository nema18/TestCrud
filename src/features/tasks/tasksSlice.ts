import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  description: string;
}

interface TasksState {
  tasks: Task[];
  nextId: number;
}

const initialState: TasksState = {
  tasks: [],
  nextId: 1,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ id: state.nextId, description: action.payload });
      state.nextId += 1;
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;