import React, { use } from 'react';
import CatCard from './CatCard';
const cardsApi=fetch('/category.json').then(res=>res.json())
const CarousalCatagory = () => {
    const cards=use(cardsApi) 
   
    return (
        <div className='my-15'>
      <div className='max-w-11/12 mx-auto text-center'>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Job Category</h1>
        <p className='mt-4 mb-7'>Job categories help organize different types of careers based on skills and interests.
They make it easier for job seekers to find suitable opportunities quickly.
Choosing the right job category can guide a person toward a successful future. 🚀</p>
      </div>
        
 <div className="carousel w-full carousel-center rounded-box space-x-4">
    {
cards.map(card=><CatCard key={card.id} card={card}></CatCard>)
    }
  </div></div>
    );
};

export default CarousalCatagory;