import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';
import Quiz from '../components/Quiz';
import { tabTitle } from '../generalFuctionality/tabTitle';

const Home = () => {
  tabTitle('DeltaQuiz: Home');
  const quizes = useLoaderData();

  return (
    <div>
      <Container>
        <Intro />
        <Row className="g-5">
          {quizes.data.map(quiz => (
            <Col xl="3" lg="3" md="6" sm="12" key={quiz.id}>
              <Quiz quiz={quiz} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
