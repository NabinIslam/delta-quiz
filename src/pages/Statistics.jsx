import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { tabTitle } from '../generalFuctionality/tabTitle';

const Statistics = () => {
  tabTitle('DeltaQuiz: Quiz Statistics');
  const quizData = useLoaderData();

  return (
    <>
      <h2 className="fw-bolder text-center mt-5">Statistics of quiz</h2>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <BarChart width={700} height={400} data={quizData.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" barSize={50} fill="#8884d8" />
        </BarChart>
      </div>
    </>
  );
};

export default Statistics;
