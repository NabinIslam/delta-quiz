import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../components/SingleQuestion';
import { tabTitle } from '../generalFuctionality/tabTitle';

const QuizPage = () => {
  const quizQuestions = useLoaderData();

  const { total, id, name, logo, questions } = quizQuestions.data;

  tabTitle(`DeltaQuiz: ${name} Quiz`);

  return (
    <div>
      <h2 className="text-center fw-bolder mt-5">
        {name} Quiz <img className="text-center" width={25} src={logo} alt="" />
      </h2>
      <h5 className="text-center">
        You will be answering total {total} questions
      </h5>
      {questions.map(singleQuestion => (
        <SingleQuestion
          key={singleQuestion.id}
          singleQuestion={singleQuestion}
        />
      ))}
    </div>
  );
};

export default QuizPage;
