import React, { createContext, useContext } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import quiz from './quiz.png';
import quiz2 from './quiz-2.png';

export const CourseContext = createContext(null);
const Home = () => {
  const courses = useLoaderData();

  return (
    <div>
      <div className='flex mt-12 gap-8 justify-center '>
        <img className='   lg:h-[250px] h-[80px]' src={quiz2} alt='' />
        <img className='   lg:h-[250px] h-[80px] rounded' src={quiz} alt='' />
        <img className='   lg:h-[250px] h-[80px]' src={quiz2} alt='' />
      </div>
      <div className='grid justify-items-center'>
        <div>
          <h2
            className=' lg:text-3xl md:text-lg text-white font-bold mx-8 my-8 p-4  shadow-lg rounded border-2
         bg-[#e07a5f]'
          >
            Choose to testify yourself. Success has no Time Limit
          </h2>
        </div>
        <div className='new-font grid lg:grid-cols-4 md:grid-cols-2 gap-8  cursor-pointer place-items-center mx-8 mb-12'>
          {courses.data.map((course) => (
            <CourseContext.Provider value={course}>
              <Course></Course>
            </CourseContext.Provider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
