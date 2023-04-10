import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobDetails = ({ data }) => {
    const { JobTitle, description, email, ex, name, picture, req, responsibility, sAddress, salary, type1, type2, _id, Phone, address } = data;
    return (
        <div>


            <div>
                <div className='flex justify-between items-center border mb-5 w-full pr-10'>
                    <div className='flex p-5 gap-5'>
                        <div className='py-12 bg-[#F4F4F4] px-5 w-40'>
                            <img src={picture} alt="" />
                        </div>
                        <div>
                            <h1>{JobTitle}</h1>
                            <h1>{name}</h1>
                            <div className='flex gap-3'>
                                <div className='mb-3'>
                                    <button className='bg- px-3 py-1 text-[#7E90FE] border border-[#7E90FE] font-semibold rounded'>{type1}</button>
                                </div>
                                <div>
                                    <button className='bg- px-3 py-1 text-[#7E90FE] border border-[#7E90FE] font-semibold rounded'>{type2}</button>
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
                        </div>
                    </div>
                    <div className=''>
                        <Link to={`/job`} state={{ details: data }}><button className='bg-[#7E90FE] px-5 py-2 text-white font-bold rounded'>View Details</button></Link>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default AppliedJobDetails;