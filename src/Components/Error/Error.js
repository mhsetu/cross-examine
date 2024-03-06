import React from 'react';
import error from './error.jpg';
const Error = () => {
  return (
    <div>
      {/* <h2 className='font-bold text-[50px] mt-[50px]'>404 Not Found</h2> */}
      <img src={error} alt='' />
    </div>
  );
};

export default Error;
