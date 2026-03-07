import React, { use } from 'react';
import RandomJob from './RandomJob';
import { JobContext } from '../pages/JobContext';
const randomJobsApi=fetch("/category.json").then(res=>res.json())
const RandomJobs = () => {

    const randomJobsPackage=use(randomJobsApi)
    // const randomJobs=randomJobsPackage.jobs
  

    
    return (
        <div>
        {
            randomJobsPackage.map(jobs=><RandomJob key={jobs.id} jobs={jobs}></RandomJob>)
        }    
        </div>
    );
};

export default RandomJobs;