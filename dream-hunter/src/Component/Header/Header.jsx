import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='lg:grid lg:grid-cols-3  justify-items-center p-14 bg-gradient-to-r from-indigo-100 to-sky-100'>
            <h2 className='lg:text-4xl text-3xl font-semibold lg:py-0 py-8 text-center mt-3'>Dream Hunter</h2>
            <nav className='lg:text-xl text-lg flex flex-col lg:flex-row lg:gap-12 gap-4 lg:mt-4 mb-6 lg:mb-1'>
                <NavLink to='/'  className={({ isActive }) => (isActive ? 'text-violet-600' : 'bg-red')}>Home </NavLink>
                <NavLink to='/statistics'  className={({ isActive }) => (isActive ? 'text-violet-600' : 'bg-red')}>Statistics</NavLink>
                <NavLink to='/jobs'  className={({ isActive }) => (isActive ? 'text-violet-600' : 'bg-red')}>Applied Jobs</NavLink>
                <NavLink to='/question&answer'  className={({ isActive }) => (isActive ? 'text-violet-600' : 'bg-red')}>Question </NavLink>
            </nav>
            <Link to='/'>
                <button className='text-xl lg:text-2xl bg-violet-500 hover:bg-violet-800 rounded-lg lg:px-4 px-3 lg:py-3 py-2 text-white'>Apply Here</button>
            </Link>
        </div>
    );
};

export default Header;