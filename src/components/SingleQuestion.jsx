import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const SingleQuestion = ({ singleQuestion }) => {
  const { options, id, question, correctAnswer } = singleQuestion;
  return (
    <div
      className="my-5 m-auto p-5 shadow rounded-4 "
      style={{ maxWidth: '900px' }}
    >
      <h5 className="text-center mb-4 position-relative">
        {question} <FontAwesomeIcon icon={faEye} role="button" />
      </h5>

      <Form>
        <Row className="g-3">
          {options.map(option => (
            <Col className="border p-4 rounded-3" sm="12" md="6" key={option}>
              <Button className="w-100 h-100 bg-secondary border-0">
                {option}
              </Button>
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
};

export default SingleQuestion;
