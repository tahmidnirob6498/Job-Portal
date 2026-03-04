import React from 'react';

const CatCard = ({card}) => {
    return (
       
        
  <div className="carousel-item  w-[50%] md:w-[30%] lg:w-[25%]">
    <div className="card bg-base-200 pt-2  shadow-sm">
  <figure>
    <img
      src={card.image} className='w-50 h-30 object-cover' />
  </figure>
  <div className="card-body p-3 md:p-6">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.description}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-amber-500 transition-all hover:scale-110 duration-100">Explore</button>
    </div>
  </div>
</div>
  </div>
 
        
    );
};

export default CatCard;