import React, { use } from 'react';
import Impact from './Impact';
const impactApi=fetch('/impacts.json').then(res=>res.json())
const OurImpact = () => {
    const imapacts=use(impactApi)
    return (
        <div className='my-15'>
            <div className='max-w-11/12 mx-auto text-center'>
                <h1 className='text-xl sm:text-3xl font-semibold'>Our Impact in Numbers</h1>
            <p className='mt-4 mb-7'>See how we are connecting talent with opportunities. Our platform has helped thousands of job seekers find their dream careers.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                {
                    imapacts.map(impact=><Impact key={impact.id} impact={impact} ></Impact>)
                }
            </div>
        </div>
    );
};

export default OurImpact;