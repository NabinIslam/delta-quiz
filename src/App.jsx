import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/statistics', element: <Statistics /> },
        { path: '/blog', element: <Blog /> },
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
