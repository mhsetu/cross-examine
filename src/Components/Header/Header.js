import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className='flex gap-4 justify-between px-8 py-8 shadow-lg shadow-[#cfdbd5]'>
        <div className=' font-semibold text-xl my-font'>
          <h2>Cross-Examine</h2>
        </div>
        <nav className='flex gap-4'>
          <div
            className={`${
              open
                ? 'grid bg-[#f4a261] p-4 gap-1 rounded text-white'
                : '  hidden lg:flex gap-2 '
            }`}
          >
            <Link to='/home'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/statistics'>Statistics</Link>
          </div>
          <div onClick={() => setOpen(!open)} className='lg:hidden xl:hidden'>
            {open ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars4Icon className='h-6 w-6' />
            )}
          </div>
        </nav>
      </div>
      <div className=' grid justify-items-end'></div>
    </div>
  );
};

export default Header;
