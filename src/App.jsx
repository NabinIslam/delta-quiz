import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import ErrorPage from './pages/ErrorPage';
import QuizPage from './pages/QuizPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: async () =>
            fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: '/statistics',
          element: <Statistics />,
          loader: async () =>
            fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        { path: '/blog', element: <Blog /> },
        {
          path: '/quiz/:quizId',
          element: <QuizPage />,
          loader: async ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
