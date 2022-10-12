import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuestion = ({ singleQuestion }) => {
  const { options, id, question, correctAnswer } = singleQuestion;

  const handleOption = opt => {
    if (opt === correctAnswer) {
      toast('Congratulatios! correct answer');
    } else {
      toast('Ops! wrong answer');
    }
  };

  const handleEyeButton = () => {
    toast(`The correct answer is "${correctAnswer}"`);
  };

  return (
    <div
      className="my-5 m-auto p-5 shadow rounded-4 "
      style={{ maxWidth: '900px' }}
    >
      <h5 className="text-center mb-4 position-relative">
        {question}{' '}
        <FontAwesomeIcon
          icon={faEye}
          role="button"
          onClick={() => {
            handleEyeButton();
          }}
        />
      </h5>
      <Form>
        <Row className="g-3">
          {options.map(option => (
            <Col className="border p-4 rounded-3" sm="12" md="6" key={option}>
              <Button
                className="w-100 h-100 bg-secondary border-0"
                onClick={() => {
                  handleOption(option);
                }}
              >
                {option}
              </Button>
            </Col>
          ))}
        </Row>
      </Form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default SingleQuestion;
