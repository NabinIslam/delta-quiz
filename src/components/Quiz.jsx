import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
  const { name, logo, total, id } = quiz;
  return (
    <Card className="shadow" style={{ width: '100%' }}>
      <Card.Img className="bg-secondary" variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/quiz/${id}`}>
          <Button className="rounded-1" variant="success">
            Start Quiz <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Quiz;
