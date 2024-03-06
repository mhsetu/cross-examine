import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { CourseContext } from '../Home/Home';

const Course = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { logo, name, id } = useContext(CourseContext);
  return (
    <div
      className='bg-[#cce3de] shadow-lg hover:bg-[#6A7DF1] hover:text-[#eaf4f4]  
    rounded-tl-[25px] rounded-[10px] w-[250px] '
      data-aos='flip-left'
      data-aos-duration='1500'
      data-aos-offset='300'
      data-aos-easing='ease-in-sine'
    >
      <div className='p-16 mx-4'>
        <img className='w-[200px] ' src={logo} alt='' />
      </div>
      <h4 className='text-2xl'>{name}</h4>
      <Link to={`/course/${id}`}>
        <button className='m-8 px-8 py-3 rounded bg-[#7a9bb6] font-semibold'>
          Start
        </button>
      </Link>
    </div>
  );
};

export default Course;
