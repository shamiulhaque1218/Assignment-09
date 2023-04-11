import React from 'react';

const Jobcata = ({data}) => {
    const {name,picture,jobs} = data;
   // console.log(data.name)
 
    return (
        <div className='bg-indigo-100 rounded-xl lg:p-8 p-4 w-64'>
            <div className='lg:h-24 h-20 lg:w-24 w-20 p-4'>
                <img src={picture} alt="logo" className=''/>
            </div>
            <p className='text-xl font-semibold p-4 '>{name}</p>
            <p className='text-lg text-slate-500 p-4'>{jobs}</p>
        </div>
    );
};

export default Jobcata;