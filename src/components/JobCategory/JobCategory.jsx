import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';





const JobCategory = () => {

    const [catData, setCatData] = useState([]);
    useEffect(()=>{
        fetch('JobCategory.json')
        .then(res => res.json())
        .then(data => setCatData(data))
    },[])

    //console.log(catData);
    return (
        <div className='mb-16'>
            
            <div>
                <div className='p-5 md:p-0 md:flex justify-evenly items-center bg-[#F9F8FF] md:px-10'>
                    <div>
                        <h1 className='md:text-8xl font-semibold mb-10'>One Step <br /> Closer To Your <br /> <span className='text-[#907DFF]'>Dream Job</span></h1>
                        <p>
                            Explore thousands of job opportunities with all the <br />
                            information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                        </p>
                        <div className='flex justify-center md:justify-start'>
                        <button className=' md:mx-0 bg-[#907DFF] px-8 py-3 font-semibold text-lg text-white rounded-md mt-10'>Get Started</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://cdn.discordapp.com/attachments/1094651413235253289/1094651512782864465/P3OLGJ1.png" alt="" />
                    </div>
                </div>

                <div className='mb-16 p-5 md:p-0'>
                    <div className='text-center mt-24'>
                        <h2 className='text-xl md:text-4xl font-bold mb-5'>Job Category List</h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                </div>

                <div className='p-5 md:p-0 md:flex gap-6 justify-center '>
                    {
                        catData.map(data => <CategoryCard
                            key={data._idx}
                            data={data}
                        ></CategoryCard>)
                    }
                </div>
            </div>
           
        </div>
    );
};

export default JobCategory;