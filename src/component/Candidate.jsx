import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

const Candidate = ({candidate}) => {
    const {name,title,image,experience,location,email,charge_per_hour,skills,status}=candidate
    return (
        <div className='border border-amber-300 bg-white p-3 rounded-xl hover:bg-blue-50'>
            <div className='flex max-w-11/12 mx-auto gap-2'>
                <img className='w-14 rounded-[50%]' src={image}alt="" />
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p className='text-gray-600 '>{title}</p>
                    <p className='text-xs text-gray-400 mt-1'>{email}</p>
                </div>
            </div>
            <div className='flex  gap-3 mt-5 pt-3 justify-center items-center'>
                {
                    skills.map((skill,index)=><p key={index} className='bg-blue-50 text-center shadow-xl rounded-2xl text-xs p-1 px-2'>{skill}</p>)
                }
            </div>
            <div className='flex justify-between items-center mt-8 text-xs text-gray-600 '>
                 <p className=' bg-green-100 p-1 px-2 rounded-2xl '>{experience} experience</p>
                 <p className='bg-green-100 p-1 px-2 rounded-2xl'>{status}</p>       

            </div>
             <div className='divider mt-0 pt-0'></div>
             <div className='flex justify-between items-center'>
                <p className='text-gray-500 flex items-center gap-1'><IoLocationOutline />{location}</p>
                <p>{charge_per_hour}/hour</p>
             </div>
            
        </div>
    );
};

export default Candidate;