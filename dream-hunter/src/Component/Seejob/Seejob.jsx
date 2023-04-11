import React from 'react';
import { addToDb } from '../../Utility/fakeDB';

const Seejob = ({google}) => {
    const {email,phone,experience,education,jobres,jobdes,location,salary,jobs_type_time,name} = google;

    const handleAddToCart = id => {
        // let newCart = []
        // const exists = cart.find(
        //   existingProduct => existingProduct.id === product.id )
        //console.log(id);
        alert('Job Applied Successfully')
        addToDb(id);
        }

    return (
        <div className='lg:grid grid-cols-7 text-start px-5 pb-36'>
            <div className='text-lg col-span-4 px-16 pr-1'>
                <p className='pb-4 pt-16'><span className='text-xl font-semibold'>Job Description:</span> {jobdes}</p>
                <p className='pb-4 pt-4'><span className='text-xl font-semibold'>Job Responsibility:</span> {jobres}</p>
                <p className='pb-4 pt-4'><span className='text-xl font-semibold'>Educational Requirements: </span><br/> {education}</p>
                <p className='pb-4 pt-4'><span className='text-xl font-semibold'>Experiences:</span> <br/> {experience}</p>
            </div>
            <div className='text-lg mt-16 col-span-2 mx-12 rounded-lg p-8 bg-indigo-100'>
                <p className='now text-xl font-semibold'>Job Details</p> <hr />
                <p> <img src="../../../public/Icons/Frame.png" h-10 w-10 className='inline' alt="" /> Salary: {salary}(Per Month) </p>
                <p className='pb-2'> <img src="../../../public/Icons/Frame-1.png" h-10 w-10 className='inline' alt="" /> Job Title: {name}</p>
                <hr />
                <p className='text-xl font-semibold py-4'> Contact Information</p>
                <p className='pb-2'> <img src="../../../public/Icons/Frame-2.png" h-10 w-10 className='inline' alt="" /> Phone: {phone}</p>
                <p className='pb-2'> <img src="../../../public/Icons/Frame-3.png" h-10 w-10 className='inline' alt="" /> Email: {email}</p>
                <p className='pb-2'> <img src="../../../public/Icons/Frame-4.png" h-10 w-10 className='inline' alt="" /> Address: {location}</p>
            </div>
            <div>
                <button className='text-xl lg:text-2xl bg-violet-500 hover:bg-violet-800 rounded-lg lg:px-36 px-28 lg:py-4 py-3 text-white absolute lg:bottom-0 sm:right-40 lg:right-80' onClick={() => handleAddToCart(google.id)}>Apply Now</button>
            </div>
        </div>
    );
};

export default Seejob;