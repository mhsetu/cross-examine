import React from 'react';

const Blog = () => {
  return (
    <div className='grid place-content-center'>
      <h2 className='lg:text-3xl text-lg text-white shadow-lg font-bold m-8 p-4 rounded border-2 bg-[#e07a5f]'>
        Questions & Answers
      </h2>
      <div className='lg:w-[800px] w-[400px]'>
        <div className='m-4 bg-[#7161ef] rounded text-white p-4'>
          <h2 className='text-xl font-bold p-4 mb-4'>
            Question 1: What is the Purpose of React Router?
          </h2>
          <p>
            React Router is a JavaScript framework that lets us handle client
            and server-side routing in React applications. It enables the
            creation of single-page web or mobile apps that allow navigating
            without refreshing the page. It also allows us to use browser
            history features while preserving the right application view.
          </p>
        </div>
        <div className='m-4 bg-[#7161ef] rounded text-white p-4'>
          <h2 className='text-xl font-bold p-4 mb-4'>
            Question 2: How does Context API works?
          </h2>
          <p>
            Context API is used to pass global variables anywhere in the code.
            It helps when there is a need for sharing state between a lot of
            nested components. It is light in weight and easier to use, to
            create a context just need to call React.createContext(). No need to
            install other dependencies or third-party libraries like redux for
            state management. Context API solves the problem of prop drilling in
            React. Prop Drilling occurs when data is to be passed between
            multiple layers before finally sending it to the required component.
            This makes the application slower. This problem is solved by Context
            API as it creates global variables to be used throughout the
            application without any middle components involved.It is also easier
            to use than React Redux
          </p>
        </div>
        <div className='m-4 bg-[#7161ef] rounded text-white p-4'>
          <h2 className='text-xl font-bold p-4 mb-4'>
            Question 3: How does useRef works?
          </h2>
          <p>
            The useRef hook is one of the built-in hooks in React. You can use
            it to persist or preserve values between re-renders. The useRef hook
            takes an initial value of any type as argument and returns an object
            with a single current property. React will set the initialValue you
            pass to the useRef hook as the value of the current property of the
            returned ref object. As an example, if the initialValue is the
            boolean value true, then the ref object returned by the useRef hook
            will be. If you don't pass an initial value, the current property
            will be undefined.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
