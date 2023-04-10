import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const AppliedJobDetails = ({ data }) => {
    const { JobTitle, description, email, ex, name, picture, req, responsibility, sAddress, salary, type1, type2, _id, Phone, address } = data;
    return (
        <div>


            <div>
                <div className='md:flex justify-between items-center border mb-5 w-full md:pr-10 rounded'>
                    <div className='md:flex p-5 gap-5'>
                        <div className='py-12 bg-[#F4F4F4] px-5 w-40'>
                            <img src={picture} alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold'>{JobTitle}</h1>
                            <h1 className='text-[#757575] mb-2 font-semibold'>{name}</h1>
                            <div className='flex gap-3'>
                                <div className='mb-3'>
                                    <button  className='bg- px-3 py-1 text-[#7E90FE] border border-[#7E90FE] font-semibold rounded'>{type1}</button>
                                </div>
                                <div>
                                    <button className='bg- px-3 py-1 text-[#7E90FE] border border-[#7E90FE] font-semibold rounded'>{type2}</button>
                                </div>
                            </div>
                            <div className='flex gap-6 mb-5 text-[#757575]'>
                                <div className='flex'>
                                <MapPinIcon className="h-6 w-6 " />
                                <p className='font-semibold'>{sAddress}</p>
                                </div>
                                <div className='flex gap-1'><CurrencyDollarIcon className="h-6 w-6 " />
                                    <p className='font-semibold'>{salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto text-end md:mx-0'>
                        <Link to={`/job`} state={{ details: data }}><button style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}}className=' px-5 py-2 text-white font-bold rounded'>View Details</button></Link>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default AppliedJobDetails;