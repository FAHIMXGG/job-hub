import React from 'react';

const JobCardInfo = ({jobData}) => {
    console.log(jobData)
    const {picture, JobTitle, name, type1, type2, sAddress, salary} = jobData
    return (
        <div className='bg-[#F9F8FF] w-full py-10 pl-10 border rounded'>
            <img className='mb-5' src={picture} alt="" />
            <h3 className='text-xl font-medium'>{JobTitle}</h3>
            <h5 className='mb-2'>{name}</h5>
            <div className='flex gap-3'>
                <div className='mb-3'>
                    <button className='bg- px-5 py-2 text-[#7E90FE] border border-[#7E90FE] font-bold rounded'>{type1}</button>
                </div>
                <div>
                    <button className='bg- px-5 py-2 text-[#7E90FE] border border-[#7E90FE] font-bold rounded'>{type2}</button>
                </div>
            </div>

            <div className='flex gap-6 mb-5'>
                <div>
                    <p>{sAddress}</p>
                </div>
                <div>
                    <p>{salary}</p>
                </div>
            </div>
            <button className='bg-[#7E90FE] px-5 py-2 text-white font-bold rounded'>View Details</button>
        </div>
    );
};

export default JobCardInfo;