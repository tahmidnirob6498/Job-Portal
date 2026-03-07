import React from 'react';
import image from '../assets/9264885.jpg'
const WrongPath = () => {
    return (
       <div>
         <div className='flex justify-center items-center min-h-screen md:min-h-full pb-30 md:pb-0'>
       <img className='max-w-2/3  md:max-w-1/2 mx-auto' src={image} alt="" />    
        </div>
       </div>
    );
};

export default WrongPath;