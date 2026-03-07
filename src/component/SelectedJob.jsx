import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const SelectedJob = () => {

    const {id}=useParams()
    const AllJobs=useLoaderData()
    console.log(AllJobs,id)
  const selectedJob=AllJobs.flatMap(category=>category.jobs).find(job=>job.job_id==id)
  console.log(selectedJob)
  const {job_description,salary,company,title,type}=selectedJob
  
 const handleApply=()=>{
 alert('Apply confirmed!')
 }
    


    return (
        <div className='bg-base-200 min-h-screen py-4 '>
           <div className='max-w-6/7 md:max-w-1/2 mx-auto shadow-xl border border-amber-500 p-3 rounded-xl'>
          <h1 className='text-center text-2xl md:text-3xl font-semibold'>{company}</h1>
          <h2 className='text-center mt-3 md:mt-5'><span className='text-xl '>Job category:</span> <span className='text-xl font-semibold'>{title}</span></h2>
          <p className='text-center mt-2'>{job_description}</p>
          <div className='flex justify-between font-semibold pt-5'>
            <p>{type}</p>
            <p>{salary}</p>
          </div>
          

          <div className="">
        <h1 className='text-center text-2xl font-semibold mt-3 pb-2'>Input your details</h1>
        <form onSubmit={handleApply}  className="fieldset max-w-10/11 md:max-w-4/7 mx-auto">
          <div className='flex items-center gap-2'>
            <p className='md:text-[16px]'>Name:</p>
            <input type="text" name='name' required className="input" placeholder="Full name" />
          </div>
          <div className='flex items-center gap-2'>
            <p className='md:text-[16px]'> Email:</p>
            <input type="email" name='email' required className="input" placeholder="Email" />
          </div>
          <div className='flex items-center gap-2'>
            <p className='md:text-[16px]'>Phone:</p>
            <input type="tel" name='Phone number' required className="input" placeholder="Number" />
          </div>
          <div className='flex items-center gap-2'>
            <p className='md:text-[16px]'>Skill:</p>
            <input type="text" name='address' required className="input" placeholder="Input your skills" />
          </div>

          <button type='submit'  className="btn w-1/3 bg-amber-400 mt-4 mx-auto">Apply</button>
        
        </form>
      </div>
            </div> 
        </div>
    );
};

export default SelectedJob;