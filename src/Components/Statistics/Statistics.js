import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const { data } = useLoaderData();

  const myArr = [];

  data.map((totals) => {
    console.log(totals.total);
    const name = { value: totals.total };
    myArr.push(name);
    console.log(myArr);
  });

  return (
    <div>
      <div className='grid place-content-center'>
        <h2 className='lg:text-3xl text-lg text-white shadow-lg font-bold m-8 p-4 rounded border-2 bg-[#e07a5f]'>
          Bar Chart
        </h2>
      </div>
      <div className='flex justify-center'>
        <ResponsiveContainer width={'80%'} height={400}>
          <BarChart
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            data={myArr}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='value' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey='value'
              fill='#8884d8'
              activeBar={<Rectangle fill='pink' stroke='blue' />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
