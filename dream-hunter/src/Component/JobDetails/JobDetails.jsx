import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Seejob from '../Seejob/Seejob';

const JobDetails = () => {
    const jobDataloader = useLoaderData();
    const jobData = useParams();
    const job1data = jobData.id;
   // console.log(jobData.id ,jobDataloader);
    const [job,setjob] = useState([])
    useEffect(() => {
        fetch("/jobdata.json")
        .then(res => res.json())
        .then(data => setjob(data));
    },[])
    const store = job.filter((job) => job.id === job1data)
   // console.log(store);
   
    return (
        <div>
            <div className='text-center p-14 bg-gradient-to-r from-indigo-100 to-sky-100'> <p className='text-3xl font-semibold'>Job Details</p>
            </div>
            {
        store.map(google => <Seejob key={google.id} google={google}
        > </Seejob>)
    }
    
        </div>
    );
};

export default JobDetails;