import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BoltIcon, BoltSlashIcon } from '@heroicons/react/24/solid';

const Details = ({ details, index }) => {
  console.log(details);
  const { question, options, correctAnswer } = details;
  const [selected, setSelected] = useState('');
  const [flash, setFlash] = useState(false);
  console.log(options);

  useEffect(() => {
    // let status;
    if (selected === '') {
      return;
    }
    if (selected === correctAnswer) {
      toast.success('Right Answer');
    }
    if (selected !== correctAnswer) {
      toast.error('Wrong Answer');
    }
  }, [selected]);
  // const setSelected = (answer) => {
  //   console.log(answer);
  //
  // };

  return (
    <div className=' bg-[#7161ef] my-8 p-8 rounded text-white'>
      {/* <p>{correctAnswer}</p> */}
      <div className='flex justify-end mr-4 mb-4 cursor-pointer duration-1000 ease-in-out'>
        {flash && <p className='mr-2'>{correctAnswer}</p>}
        <div onClick={() => setFlash(!flash)}>
          {flash ? (
            <BoltSlashIcon className='h-6 w-6' />
          ) : (
            <BoltIcon className='h-6 w-6' />
          )}
        </div>
      </div>
      <h2 className='mb-4 border-2  p-4 rounded text-xl font-bold'>
        Quiz {index + 1} : {question}
      </h2>
      <div className=' justify-center'>
        <div>
          <div>
            {/* <p className='ml-2'>{op}</p> */}
            <div>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                {options.map((op) => (
                  <div className='flex text-left items-center border-2 p-4 rounded hover:bg-[#8e94f2] '>
                    <input
                      className='mr-2'
                      onClick={(e) => setSelected(e.target.value)}
                      type='radio'
                      name={options}
                      value={op}
                    />
                    <p>{op}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Toaster position='top-right' />
      </div>
    </div>
  );
};

export default Details;
