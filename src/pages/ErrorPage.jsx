import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-xl-center fw-bolder" style={{ fontSize: '200px' }}>
        Ops!
      </h1>
      <h4 className="text-center fw-bold">404 - PAGE NOT FOUND</h4>
      <Link to={'/'}>
        <Button className="rounded-5">Go To Homepage</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
