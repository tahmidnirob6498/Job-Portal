import React from 'react';
import { Link } from 'react-router';

const AllJob = ({RandomJob}) => {
    
    
               console.log(RandomJob)
        return(
     <div className="card hover:scale-101  shadow-xl border border-amber-300 text-start p-4">
 
       <h1 className='text-xl font-bold'>{RandomJob.title}</h1>
       <div className='text-gray-600 flex gap-10'>
        <small>{RandomJob.location}</small>
        <small>{RandomJob.posted}</small>
       </div>
       <p className=' pb-5 shadow-2xl mt-2'>{RandomJob.type}</p>
       
       <div className='flex justify-between items-center border-t pt-5'>
        <h1 className='text-xl font-semibold'>{RandomJob.company}</h1>
        <p>{RandomJob.salary}</p>
       </div>
       <Link to={`/selectedJob/${RandomJob.job_id}`} className='text-center rounded-xl my-2 mt-6 mx-1 py-1 hover:scale-105 bg-amber-300 max-w-1/3 '>Apply</Link>
  </div>
);
};

export default AllJob;