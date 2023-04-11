// https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-shamiulhaque1218/tree/main/dream-hunter
import React, { useEffect, useState } from 'react';
import './App.css'
import AnotherHeader from './Component/AnotherHeader/AnotherHeader';
import { useLoaderData } from 'react-router-dom';
import Jobcata from './Component/JobCata/Jobcata';
import Job from './Component/job/Job';

const App = () => {
  const data = useLoaderData()
  // console.log(data);
  const [jobs,setjobs] = useState([]);

  const [num,setnum] = useState(4) 
   const btn = () => {
    const number = num + 2
    setnum(number);
   }
  console.log(num);
 const uk = () => {
  //console.log('ok')
 }
 

  useEffect(() => {
    fetch('jobdata.json')
    .then(res=>res.json())
    .then(data=>setjobs(data))
  },[])
  //console.log(jobs)

  const loadCount =  uk ? num : 5;
  return (
    <div>
      <AnotherHeader> </AnotherHeader>
      <div className='text-center lg:pt-24 pt-16 pb-8'>
        <div className='lg:text-5xl text-3xl font-semibold lg:pb-8 pb-4'>Job Category List</div>
        <div className='text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</div>
      </div>
      <div className='lg:flex lg:gap-10 gap-12 grid grid-cols-2 px-8 lg:px-0 justify-center py-10'>
      {
        data.map(data => <Jobcata  key={data.id}
          data={data}> </Jobcata>
          )
      }
      </div>
      <div className='text-center lg:pt-12 pt-8 pb-12'>
        <div className='lg:text-5xl text-3xl font-semibold lg:pb-8 pb-4'>Featured Jobs</div>
        <div className='text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</div>
      </div>
      <div className='lg:grid grid-cols-2 flex flex-col justify-items-center px-10 lg:px-96 gap-5 pb-16'>
        {
          
          jobs.slice(0,loadCount).map(job => <Job key={job.id} job={job} 
          >

          </Job>)
        }
        
      </div>
      <div className='text-center pb-16'>
        <button onClick={btn} className='text-xl lg:text-2xl bg-violet-600 hover:bg-violet-900 rounded-lg lg:px-6 px-6 lg:py-3 py-3 text-white'>See All Jobs</button>
      </div>
      
    </div>
  );
};

export default App;

