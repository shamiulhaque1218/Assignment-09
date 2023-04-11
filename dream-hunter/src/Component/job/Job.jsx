import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    
   const {picture,name,jobs,jobs_type,jobs_type_time,salary,location,id} = job;
    return (
        <div className='text-lg border-2 pl-10 w-full h-80 pr-40 pt-8 rounded-lg'>
            <img src={picture} alt="" />
            <p className='text-xl font-semibold py-2'>{name}</p>
            <p className='text-slate-500 pb-4'>{jobs}</p>
            <div className='flex text-lg pb-4'>
                <p className='text-violet-800 mr-4 border-violet-800 border-2 py-1 px-3 rounded-md'>{jobs_type}</p>
                <p className='text-violet-800 mr-4 border-violet-800 border-2 py-1 px-3 rounded-md'>{jobs_type_time}</p>
            </div>
            <div className='flex text-lg text-slate-500 pb-4 w-96'>
                <p className='pr-10'>{location}</p>
                <p> <img src="../../../public/Icons/Frame.png" h-10 w-10 className='inline pb-2' alt="" /> Salary: {salary}</p>
            </div>
            <Link to={`jobdetails/${id}`}>
                <button className='text-xl lg:text-xl bg-violet-500 hover:bg-violet-800 rounded-lg lg:px-3 px-3 lg:py-2 py-2 text-white'>View Details</button>
            </Link>
            
        </div>
    );
};

export default Job;