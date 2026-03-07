import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import CatJob from './CatJob';
import { JobContext } from '../pages/JobContext';

const CatJobs = () => {
    const [catJobs,setCatJobs]=useState([])
    const {id}=useParams()
  useEffect(()=>{
    fetch('/category.json')
    .then(res=>res.json())
    .then(data=>setCatJobs(data))
  },[])
  
    const selectedPath=catJobs?.find(catJob=>String(catJob.id) === id)
    
  
//    const jobs=selectedPath?.jobs;
   
  
 
   

    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10'>
        {
         selectedPath?.jobs?.map(job=><CatJob key={job.job_id} job={job}></CatJob>)  
        }    
        </div>
    )
};

export default CatJobs;