import React, { use } from 'react';
import RandomJob from './RandomJob';
import { JobContext } from '../pages/JobContext';
const randomJobsApi=fetch("/category.json").then(res=>res.json())
const RandomJobs = () => {

    const randomJobsPackage=use(randomJobsApi)
    // const randomJobs=randomJobsPackage.jobs
    console.log(randomJobsPackage)

    
    return (
        <div>
        {
            randomJobsPackage.map(jobs=><RandomJob jobs={jobs}></RandomJob>)
        }    
        </div>
    );
};

export default RandomJobs;