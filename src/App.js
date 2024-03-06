import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import CourseDetails from './Components/Course Details/CourseDetails';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>,
        },
        {
          path: '/home',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        {
          path: '/statistics',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Statistics></Statistics>,
        },
        {
          path: '/course/:courseId',
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.courseId}`
            );
          },
          element: <CourseDetails></CourseDetails>,
        },
        {
          path: '*',
          element: <Error></Error>,
        },
      ],
    },
  ]);
  return (
    <div className='App'>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
