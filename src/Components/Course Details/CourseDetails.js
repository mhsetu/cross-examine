import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const CourseDetails = () => {
  const { data } = useLoaderData();

  console.log(data.questions);

  return (
    <div className='grid justify-items-center'>
      <div className='m-4 lg:w-[600px] w-[300px]'>
        <h2 className='lg:text-3xl text-lg text-white shadow-lg font-bold p-4 rounded border-2 bg-[#e07a5f]'>
          Number of Questions {data.questions.length}
        </h2>
        {data.questions.map((details, index) => (
          <Details index={index} key={details.id} details={details}></Details>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
