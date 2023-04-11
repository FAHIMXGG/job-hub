import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import { MapPinIcon, CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon  } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const location = useLocation();
    const details = location.state.details

    const { JobTitle, description, email, ex, name, picture, req, responsibility, sAddress, salary, type1, type2, _id, Phone, address } = details;

    
    const [cart, setCart] = useState([])
    //console.log(cart);
    let button = "Apply Now";
    const handleAddInfo =  (_id) =>{
            const newCart = [...cart, details]
            setCart(newCart)
            addToDb(_id)
            if(newCart.length >= 2){
                notify()
            }
            else{
                notify2()
            }
    }
    if(cart.length > 0){
        button = <h1 className='font-bold text-[##F9F8FF]'>Applied!!</h1>
        
    }

    

    const notify = () =>{
        toast("You Have Already Applied This Job")
    }
    const notify2 = () =>{
        toast("Applied!")
    }
    

    return (
        <div className='mb-10'>
            <div className='bg-[#F9F8FF] text-center mb-5'>
                <h1 className='font-bold text-2xl py-32'>Job Details</h1>
            </div>
            

            <div className='md:flex md:ml-28 md:mr-28 gap-5 text-[#757575] p-5 md:p-0'>
                <div className='mt-5 '>
                    <p className='mb-5'><span className='font-bold text-black'>Job Description: </span>{description}</p>
                    <p className='mb-5'><span className='font-bold text-black'>Job Responsibility: </span>{responsibility}</p>
                    <p className='font-bold text-black'>Educational Requirements:</p>
                    <p className='mb-5'>{req}</p>
                    <p className='font-bold text-black'>Experiences:</p>
                    <p>{ex}</p>
                </div>
                <div className='md:w-6/12 mt-10 md:mt-0'>
                    <div className='bg-[#F4F1FF] p-10'>
                        <h4 className='font-bold text-xl mb-5 text-black'>Job Details</h4>
                        <hr className='mb-5 border-[#c6ccf5]' />
                        <div className='flex gap-1 mb-2'>
                        <CurrencyDollarIcon className="h-6 w-6 text-[#94a1f8]" />
                            <p><span className='font-bold text-black'>Salary: </span>{salary}</p>
                        </div>
                        <div className='flex gap-1'>
                        <CalendarDaysIcon className="h-6 w-7 text-[#94a1f8]" />
                            <p><span className='font-bold text-black'>Job Title: </span>{JobTitle}</p></div>
                        <h4 className='font-bold text-xl mb-5 mt-3 text-black'>Contact Information</h4>
                        <hr className='mb-5 border-[#c6ccf5]' />
                        <div className='flex gap-1'>
                        <PhoneIcon className="h-6 w-6 text-[#94a1f8]" />
                            <p><span className='font-bold text-black'>Phone: </span>{Phone}</p>
                        </div>
                        <div className='flex gap-1 mb-2 mt-2'>
                        <EnvelopeIcon className="h-6 w-6 text-[#94a1f8]" />
                            <p><span className='font-bold text-black'>Email: </span>{email}</p>
                        </div>
                        <div className='flex gap-1'>
                        <MapPinIcon className="h-6 w-8 text-[#94a1f8]" />
                            <p><span className='font-bold text-black'>Address: </span>{address}</p>
                        </div>
                    </div>
                    <button style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} onClick={() => handleAddInfo(_id)} className=' w-full rounded py-3 mt-5 text-center text-white'>{button}</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;