import React from 'react';

const AnotherHeader = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 lg:px-48 bg-gradient-to-r from-indigo-100 to-sky-100 pb-10'>
            <div className='lg:pr-8 pl-1'>
                   <img src="https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?w=740&t=st=1681065107~exp=1681065707~hmac=a95533f4c556eb1791456fceec2704fc08172e798914b4276947ac4f502691b2" alt="picture " className='image-round' />
            </div>
            <div className='lg:pr-60 pr-10 lg:pl-12 pl-8 text-start'>
                    <p className='lg:text-6xl text-3xl font-semibold py-4 pt-10 lg:pt-0'>One Step Closer To Your Dream Job</p>
                    <p className='text-base pt-4 pb-12'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='text-xl lg:text-2xl bg-violet-500 hover:bg-violet-800 rounded-lg lg:px-4 px-3 lg:py-3 py-2 text-white'>Get Started </button>
            </div>
        </div>
    );
};

export default AnotherHeader;