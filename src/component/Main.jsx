import React from 'react';
import Marquee from 'react-fast-marquee';
import { CiSearch } from 'react-icons/ci';
import { IoMdPersonAdd } from 'react-icons/io';
import { IoCloudDoneSharp, IoPeople } from 'react-icons/io5';
import CarousalCatagory from './CarousalCatagory';
import OurImpact from './OurImpact';
import { Link } from 'react-router';

const Main = () => {
    return (
        <div>
       <section>
         <Marquee  speed={6} className='my-5 md:my-20'>
             <div className=" mr-10 font-semibold  text-gray-400 sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-gray-600'>Finder</span></div>
             <div className=" mr-10 font-semibold  text-gray-400 sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-gray-600'>Finder</span></div>
             <div className=" mr-10 font-semibold  text-gray-400 sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-gray-600'>Finder</span></div>
             <div className=" mr-10 font-semibold  text-gray-400 sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-gray-600'>Finder</span></div>
             <div className=" mr-10 font-semibold  text-gray-400 sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-gray-600'>Finder</span></div>
             <div className=" mr-10 font-semibold  text-gray-400 sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-gray-600'>Finder</span></div>
             <div className=" mr-10 font-semibold  text-gray-400 sm:text-2xl hidden sm:flex justify-center items-center"><img className=' w-6 md:w-12 rounded-full  gap-1' src="/public/job-logo-symbol-vector-design-illustration-2BJTR67.jpg" alt="" />Job<span className='sm:text-2xl text-gray-600'>Finder</span></div>
             
            </Marquee>
       </section>
            <section className=''>
         <div className='max-w-11/12 md:max-w-3/7 mx-auto mb-7 text-center'>
              <small className='text-amber-500   font-bold'>How it works</small>
           <h1 className=' text-2xl md:text-3xl lg:text-4xl font-semibold'>Follow Easy 4 steps</h1>
           <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
         </div>
         
        <div className="card grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  bg-base-100 card-md shadow-sm">
  <Link to='/jobs'  className="card-body transition-all hover:bg-amber-400  hover:scale-105  hover:text-white duration-700 shadow-xl rounded-sm text-center">
         <CiSearch size={40} className='mx-auto ' fill='amber'/>
                <h1 className='text-xl sm:text-2xl font-semibold'>Search Jobs</h1>
                <p className='md:text-[15px]'>Browse curated job listings and apply with confidence. Your next opportunity is just a search away.</p>
            </Link>
  <div className="card-body transition-all hover:bg-amber-400  hover:scale-105   hover:text-white duration-700 shadow-xl rounded-sm text-center">
         <IoMdPersonAdd  size={40} className='mx-auto ' fill='amber'/>
                <h1 className='text-xl sm:text-2xl font-semibold'>Create account</h1>
                <p className='md:text-[15px]'>Create your free account and start exploring thousands of verified job opportunities. Take the first step towards your dream career today.</p>
            </div>
  <div className="card-body transition-all hover:bg-amber-400  hover:scale-105   hover:text-white duration-700 shadow-xl rounded-sm text-center">
         <IoPeople size={40} className='mx-auto ' fill='amber'/>
                <h1 className='text-xl sm:text-2xl font-semibold'>Blogs</h1>
                <p className='md:text-[15px]'>Browse curated job listings and apply with confidence. Your next opportunity is just a search away.</p>
            </div>
  <Link to='/jobs' className="card-body transition-all hover:bg-amber-400  hover:scale-105   hover:text-white duration-700 shadow-xl rounded-sm text-center">
         <IoCloudDoneSharp  size={40} className='mx-auto ' fill='amber'/>
                <h1 className='text-xl sm:text-2xl font-semibold'>Apply</h1>
                <p className='md:text-[15px]'>Stay updated with the newest trends in job search, resume building, interview strategies, and career growth. </p>
            </Link>
    


         </div>
           


            </section>
            <section>
                <CarousalCatagory></CarousalCatagory>
            </section>
            <section>
                <OurImpact></OurImpact>
            </section>

        </div>
    );
};

export default Main;