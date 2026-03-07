import React, { use, useRef} from 'react';
import Category from '../component/Category';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import Candidates from '../component/Candidates';
import WrongPath from '../component/WrongPath';
import { JobContext } from './JobContext';
const categoriesApi=fetch('/category.json').then(res=>res.json())
 
const Jobs = () => {
  
 
    const categories=use(categoriesApi)
    const navigate=useNavigate()
const inputRef=useRef()
    const handleSearch=()=>{

      const search=inputRef.current.value;
     const data= categories.find(category=>category.name===search)
     
    
     if(data){
      
  navigate(`/jobs/${data.id}`)
  
     }
    
    }

    
    return (
        <div className='bg-blue-50 p-1'>
 <div className="hero bg-amber-400 items-start py-10 md:pt-22 sm:min-h-screen mb-5">
  <div className=" text-center">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl px-2 md:text-5xl font-bold">Discover <span className='text-green-600'>Opportunities</span> That Match Your Skills</h1>
      <p className="py-6 px-1 text-sm  sm:text-[18px] text-gray-700">
       Explore thousands of verified opportunities across multiple industries.
Whether you’re looking for full-time, part-time, remote, or freelance roles,
your next big opportunity starts here.
      </p>
   <div className='flex gap-1 px-5 max-w-5/6 mx-auto '>
       <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input ref={inputRef}  type="search" className="grow" placeholder="Search" />
  
</label> <button onClick={handleSearch} className='btn btn-neutral ml-1'>search</button>
   </div>
    </div>

    <div className='flex gap-4 flex-wrap mt-10  max-w-10/12 mx-auto'><span className='text-green-600 font-bold'>Popular search:</span>
    {
        categories.slice(0,6).map((category,index)=><Link key={index}  to={`/jobs/${category.id}`}  className=' underline  rounded-xl'>{category.name}</Link>)
    }
</div>
  </div>
</div>
 <div className='text-center py-5 md:py-10'>
    <h1 className='text-3xl md:text-4xl font-semibold'>Jobs of the day</h1>
    <p className='py-2 text-gray-500'>Search and connect with the right candidates faster.</p>
         <div className='md:pl-10 flex gap-4 flex-wrap mt-10 max-w-10/12 mx-auto'>
         <NavLink to='/jobs' end  className={ ` text-sm md:text-[17px] p-1 px-2 shadow-xl rounded-xl`}>All</NavLink>
    {
        categories.map(category=><NavLink key={category.id} to={`/jobs/${category.id}`} className=' bg-base-200 text-sm md:text-[17px] p-1 px-2 shadow-xl rounded-xl'>{category.name}</NavLink>)
    }
</div>


<Outlet></Outlet>



 </div>
 <Candidates></Candidates>

            
        </div>
    );
};

export default Jobs;