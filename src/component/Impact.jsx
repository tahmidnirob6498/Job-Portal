import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Impact = ({impact}) => {
    const {ref,inView}=useInView({
        triggerOnce:true,
        threshold:0.3
    })
    return (
        <div className=' text-center space-y-2 py-3 shadow-xl'>
            <img className='max-w-10 mx-auto' src={impact.icon} alt="" />
          <h1 ref={ref} className='text-xl md:text-2xl'>{inView && <CountUp start={0} end={impact.count} duration={10} suffix='+'></CountUp>}</h1>
          <p className='text-xl font-semibold'>{impact.label}</p>  
        </div>
    );
};

export default Impact;