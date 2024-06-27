import React from 'react';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../store';
// bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className='w-100' >
      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item key={task.id} className='mb-2'>{task.description}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;