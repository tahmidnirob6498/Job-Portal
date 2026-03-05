import React from 'react';
import AllJob from './AllJob';
const RandomJob = ({jobs}) => {
    
const randomJobs=jobs?.jobs || []
console.log(randomJobs)
     
 
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10'>
 
    {
      randomJobs.map(RandomJob=><AllJob RandomJob={RandomJob}></AllJob>)
}
  </div>
    ) }
;

export default RandomJob;