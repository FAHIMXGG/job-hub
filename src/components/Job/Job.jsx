import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Job = () => {
    const jobData = useLoaderData()
    const { JobTitle, description, email, ex, name, picture, req, responsibility, sAddress, salary, type1, type2, _id, phone, address } = jobData;

    return (
        <div>
            <div className='flex md:ml-24 md:mr-24 gap-5'>
                <div>
                    <p><span className='font-bold'>Job Description:</span>{description}</p>
                    <p><span>Job Responsibility:</span>{responsibility}</p>
                    <p>Educational Requirements:</p>
                    <p>{req}</p>
                    <p>Experiences:</p>
                    <p>{ex}</p>
                </div>
                <div>
                    <div className='bg-[#F4F1FF] p-10'>
                        <h4 className='font-bold text-xl mb-3'>Job Details</h4>
                        <hr className='mb-3' />
                        <div><p><span>Salary:</span>{salary}</p></div>
                        <div><p><span>Salary:</span>{JobTitle}</p></div>
                        <h4 className='font-bold text-xl mb-3'>Contact Information</h4>
                        <hr className='mb-3' />
                        <div><p><span>Phone:</span>{phone}</p></div>
                        <div><p><span>Email:</span>{email}</p></div>
                        <div><p><span>Address:</span>{address}</p></div>
                    </div>
                    <button className='bg-[#818DFE] px-40 mt-5 text-center'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default Job;