import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails';

const AppliedJob = () => {
    const [jobsData, setJobsData] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('JobData.json')
            .then(res => res.json())
            .then(data => setJobsData(data))
    }, [])
    //console.log(jobsData)
    

     useEffect(()=>{
        //console.log(jobsData)
        const storedCart = getShoppingCart();
        const savedCart =[]
        for(const id in storedCart){
            const addedProduct = jobsData.find(product => product._id === id)
            //console.log(savedProduct);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
            setCart(savedCart);
        }
     }, [jobsData])

     console.log(cart)
    return (
        <div >
            <div className='bg-[#F9F8FF] text-center mb-5'>
                <h1 className='font-bold text-2xl py-32'>Job Details</h1>
            </div>
            <div className='mx-72 mt-5'>
            {
                cart.map(data => <AppliedJobDetails
                key={data._id}
                data={data}
                ></AppliedJobDetails>)
            }
            </div>
        </div>
    );
};

export default AppliedJob;