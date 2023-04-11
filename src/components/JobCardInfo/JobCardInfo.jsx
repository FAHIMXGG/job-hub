import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
//export const JobData = createContext()
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const JobCardInfo = ({jobData}) => {
    //console.log(jobData)
    const { picture, JobTitle, name, type1, type2, sAddress, salary, _id } = jobData

    



    return (
        <div className='bg-[#F9F8FF] w-full py-10 pl-10 border rounded mb-10'>
            <img className='mb-5' src={picture} alt="" />
            <h3 className='text-xl font-medium text-[#474747]'>{JobTitle}</h3>
            <h5 className='mb-2 text-[#757575]'>{name}</h5>
            <div className='flex gap-3'>
                <div className='mb-3'>
                    <button className='bg- px-5 py-2 text-[#7E90FE] border border-[#7E90FE] font-bold rounded'>{type1}</button>
                </div>
                <div>
                    <button  className='bg- px-5 py-2 text-[#7E90FE] border border-[#7E90FE] font-bold rounded'>{type2}</button>
                </div>
            </div>

            <div className='flex gap-6 mb-5 text-[#757575]'>
                <div className='flex gap-1'>
                <MapPinIcon className="h-6 w-6 " /> 
                    <p>{sAddress}</p>
                </div>
                <div className='flex gap-1'>
                <CurrencyDollarIcon className="h-6 w-6 " /> 
                    <p>{salary}</p>
                </div>
            </div>

            {/* onClick={() => handleInfo(jobData)} */}
            
                <Link   to={`/job`} state={{details:jobData}}><button style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}}className=' px-5 py-2 text-white font-bold rounded'>View Details</button></Link>

            



        </div>
    );
};

export default JobCardInfo;