import React from 'react';
import useAuth from './useAuth';
import { Container } from 'react-bootstrap';

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  return (
    <Container className="d-flex flex-column py-2" style={{ height: '100vh' }}>
      <div className="d-flex justify-content-center align-items-center">
        {' '}
        HELLO{' '}
      </div>
      <div className="d-flex flex-grow-1 my-2 justify-content-center align-items-center">
        {' '}
        MIDDLE
      </div>
      <div className="d-flex justify-content-center align-items-center">
        BOTTOM
      </div>
    </Container>
  );
};

export default Dashboard;
