import React from 'react';
import image from '../assets/young-man-in-a-smart-suit-smiles-confidently-with-arms-crossed-against-a-plain-background-free-photo-removebg-preview.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
  <div className="hero-content md:min-h-screen  flex-col-reverse px-0 py-4 md:flex-row-reverse w-11/12">
    <img
      src={image}
      className="rounded-lg max-h-72 md:min-h-100  bg-base-200 h-100"
    />
    <div className='w-[90%] text-center md:text-start md:w-[60%]'>
      <h3 className='text-amber-600 text-sm  md:text-xl'>We have 28,000+ jobs</h3>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Your <span className='text-amber-500'>Dream</span> Jobs Is Waiting For You</h1>
      <p className="py-3 sm:py-4 md:py-6">
       We believe everyone deserves the right opportunity to grow. Our platform brings together ambitious job seekers and forward-thinking companies.
      </p>
      <Link to='/jobs' className="btn bg-amber-400">Find your jobs</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;