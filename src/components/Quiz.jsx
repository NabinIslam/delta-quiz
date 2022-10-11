import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Quiz = ({ quiz }) => {
  const { name, logo, total, id } = quiz;
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img className="bg-secondary" variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button className="rounded-1" variant="success">
          Start Quiz <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Quiz;
