import React from 'react';
import AllJob from './AllJob';
const RandomJob = ({jobs}) => {
    
const randomJobs=jobs?.jobs || []

     
 
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10'>
 
    {
      randomJobs.map((RandomJob,index)=><AllJob key={index} RandomJob={RandomJob}></AllJob>)
}
  </div>
    ) }
;

export default RandomJob;