import React from 'react';
// react-router
import { Link } from 'react-router-dom';
// bootstrap
import Container from 'react-bootstrap/Container';
import Button  from 'react-bootstrap/Button';

const HomePage: React.FC = () => {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center min-vh-100 bg-blue'>
      <div className='d-flex flex-column'>
        <Link to="/tasks">
          <Button size='lg' variant="primary" className="m-2">Go to Tasks</Button>
        </Link>
        <Link to="/items">
          <Button size='lg' variant="primary" className="m-2">Go to Items</Button>
        </Link>
      </div>
    </Container>
  );
};

export default HomePage;