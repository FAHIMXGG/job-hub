import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';

const Details = () => {
    const location = useLocation();
    const details = location.state.details

    const { JobTitle, description, email, ex, name, picture, req, responsibility, sAddress, salary, type1, type2, _id, Phone, address } = details;

    
    const [cart, setCart] = useState([])
    //console.log(cart);
    const handleAddInfo =  (_id) =>{
            const newCart = [...cart, details]
            setCart(newCart)
            addToDb(_id)
    }


    return (
        <div>
            <div className='bg-[#F9F8FF] text-center mb-5'>
                <h1 className='font-bold text-2xl py-32'>Job Details</h1>
            </div>

            <div className='flex md:ml-28 md:mr-28 gap-5 text-[#757575]'>
                <div className='mt-5 '>
                    <p className='mb-5'><span className='font-bold text-black'>Job Description:</span>{description}</p>
                    <p className='mb-5'><span className='font-bold text-black'>Job Responsibility:</span>{responsibility}</p>
                    <p className='font-bold text-black'>Educational Requirements:</p>
                    <p className='mb-5'>{req}</p>
                    <p className='font-bold text-black'>Experiences:</p>
                    <p>{ex}</p>
                </div>
                <div className='w-5/12'>
                    <div className='bg-[#F4F1FF] p-10'>
                        <h4 className='font-bold text-xl mb-3 text-black'>Job Details</h4>
                        <hr className='mb-3' />
                        <div><p><span className='font-bold text-black'>Salary: </span>{salary}</p></div>
                        <div><p><span className='font-bold text-black'>Job Title: </span>{JobTitle}</p></div>
                        <h4 className='font-bold text-xl mb-3 mt-3 text-black'>Contact Information</h4>
                        <hr className='mb-3' />
                        <div><p><span className='font-bold text-black'>Phone: </span>{Phone}</p></div>
                        <div><p><span className='font-bold text-black'>Email: </span>{email}</p></div>
                        <div><p><span className='font-bold text-black'>Address: </span>{address}</p></div>
                    </div>
                    <button onClick={() => handleAddInfo(_id)} className='bg-[#818DFE] w-full rounded py-3 mt-5 text-center text-white'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;