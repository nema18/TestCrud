import React, { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
// features
import { addTask } from '../features/tasks/tasksSlice';
// bootstrap
import  Modal from 'react-bootstrap/Modal';
import  Button from 'react-bootstrap/Button';
import  Form from 'react-bootstrap/Form';

interface Props {
  onClose: () => void;
}

const AddTaskModal: React.FC<Props> = ({ onClose }) => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (description.trim()) {
      dispatch(addTask(description));
      onClose();
    }
  };

  return (
    <Modal centered show onHide={onClose}>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTaskDescription">
            <Form.Label>New Task Name :</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Task Name"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={description.length === 0}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTaskModal;