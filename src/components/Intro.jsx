import React from 'react';
import IntroBg from '../assets/images/intro-bg.jpg';

const Intro = () => {
  return (
    <div
      className="py-5 px-5 my-5 rounded-4 shadow"
      style={{
        backgroundImage: 'url(' + IntroBg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="fw-bolder text-white">Welcome to DeltaQuiz</h1>
      <h4 className="fw-normal text-white">
        Test yourself in the way of learning web development by playing the
        quizes and be a master of web development.
      </h4>
    </div>
  );
};

export default Intro;
