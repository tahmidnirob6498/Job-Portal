import React from 'react';

const CatJob = ({job}) => {
    return (
          <div className="card hover:scale-101  shadow-xl border border-amber-300 text-start p-4">
 
       <h1 className='text-xl font-bold'>{job.title}</h1>
       <div className='text-gray-600 flex pt-2 gap-10'>
        <small>{job.location}</small>
        <small>{job.posted}</small>
       </div>
       <p className=' pb-5 shadow-2xl mt-2 text-gray-600 text-sm'>{job.type}</p>
       
       <div className='flex justify-between items-center border-t border-gray-400 pt-5'>
        <h1 className='text-xl font-semibold'>{job.company}</h1>
        <p>{job.salary}</p>
       </div>
       <button className=' rounded-xl my-2 mt-6 mx-1 py-1 hover:scale-105 bg-amber-300 max-w-1/3 '>Apply</button>
  </div>
    );
};

export default CatJob;