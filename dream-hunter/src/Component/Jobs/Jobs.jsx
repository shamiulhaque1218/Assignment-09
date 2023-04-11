import React from 'react';
import { getStoredCart } from '../../Utility/fakeDB';
import { useLoaderData } from 'react-router-dom';
import Result from '../Result/Result';

const Jobs = () => {
    const jobdata = useLoaderData()
     const savedCart = getStoredCart();
     let cart = [];
     for(const id in savedCart) {
        const foundproduct = jobdata.find(job => job.id === id)
        if(foundproduct) {
            cart.push(foundproduct);
        }
     }

    //console.log(cart);
    return (
        <div >
            <div className='lg:px-48 bg-gradient-to-r from-indigo-100 to-sky-100 pb-10'>
            <p className='text-4xl text-center'>Your Applied jobs</p>
            </div>
            <div className='text-end lg:pr-40 pt-20 text-xl'>
            <button className='text-white mr-4  border-2 py-1 px-3 rounded-md bg-yellow-500'>On Site Jobs</button>
                <button className='text-white mr-4 border-2 py-1 px-3 rounded-md bg-green-500'>Remote Jobs</button>
                
                </div>   
           
     <div className='lg:px-40 lg:pb-8 '>
        
     {
        cart.map(final => <Result key={final.id} final={final}
        > </Result>)
     }
     
     </div>
        </div>
    );
};

export default Jobs;