import React, { use } from 'react';
import Candidate from './Candidate';
const candidatesApi=fetch('/candidates.json').then(res=>res.json())
const Candidates = () => {
    const candidates=use(candidatesApi)
    console.log(candidates)
    return (
        <div className='mt-10'>
         <div className=' max-w-10/11 md:max-w-4/7 mx-auto text-center'>
           <h1 className=' text-3xl md:text-4xl font-semibold'>Top Candidates</h1> 
           <p className='py-4'>Discover our top candidates who are talented, experienced, and ready to contribute to your success. Find the perfect professional for your next project.</p>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 py-5 px-2'>
          {
            candidates.map(candidate=><Candidate candidate={candidate}></Candidate>)
          }  
            
         </div>   
        </div>
    );
};

export default Candidates;