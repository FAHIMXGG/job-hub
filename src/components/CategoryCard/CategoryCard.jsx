import React from 'react';

const CategoryCard = ({data}) => {
    const {image, heading, paragraph} = data
    //console.log(image)
    return (
        <div>
            <div >
                <div className='bg-[#FAF8FF] p-8 rounded md:w-96'>
                    <img className='bg-[#EDEEFF] p-4 rounded mb-5' src={image} alt="" />
                    <h2 className='text-xl font-bold text-[#474747] mb-2'>{heading}</h2>
                    <p className='text-[#A3A3A3]'>{paragraph}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;