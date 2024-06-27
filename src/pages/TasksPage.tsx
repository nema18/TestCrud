import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import { Button, Container } from 'react-bootstrap';

const TasksPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center gap-2'>
      <Button onClick={() => setIsModalOpen(true)} className='mb-4 mt-4'>Add New Task</Button>
      {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} />}
      <TaskList />
    </Container>
  );
};

export default TasksPage;