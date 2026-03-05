import React from 'react';
import { Link } from 'react-router';

const Category = ({category}) => {
    return (
      
         <div className="card pt-2 h-full shadow-sm">
  <figure>
    <img
      src={category.image} className='w-50 h-30 object-cover' />
  </figure>
  <div className="card-body p-3 md:p-6">
    <h2 className="card-title">{category.name}</h2>
    <p>{category.description}</p>
    <div className="card-actions justify-end">
      <Link to={`/jobs/${category.id}`}  className="btn bg-amber-500 transition-all hover:scale-110 duration-100">Explore</Link>
    </div>
  </div>
</div> 
       
    );
};

export default Category;