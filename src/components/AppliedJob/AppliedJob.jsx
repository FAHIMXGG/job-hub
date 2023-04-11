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


    useEffect(() => {
        //console.log(jobsData)
        const storedCart = getShoppingCart();
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = jobsData.find(product => product._id === id)
            //console.log(savedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
            setCart(savedCart);
        }
    }, [jobsData])

    //console.log(cart)
    const [search, setSearch] = useState('')
    //console.log(search)
    return (
        <div >
            <div className='bg-[#F9F8FF] text-center mb-5'>
                <h1 className='font-bold text-2xl py-32'>Applied Job</h1>
            </div>

            {/* <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form> */}
            <div className='md:mx-60 mx-5'>
                <div className='flex justify-end md:pr-12 border-[#7E90FE]'>
                    <select className='rounded' onChange={(e) => setSearch(e.target.value)}>
                        <option value="">All</option>
                        <option value="onsite">Onsite</option>
                        <option value="remote">Remote</option>

                    </select>
                </div>
            </div>

            <div className='md:mx-72 mt-5 p-5 md:p-0'>
                {
                    cart.filter((item) => {
                        return search.toLocaleLowerCase() === '' ? item : item.type1.toLocaleLowerCase().includes(search)
                    }).map(data => <AppliedJobDetails
                        key={data._id}
                        data={data}
                    ></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;