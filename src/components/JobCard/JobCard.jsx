import React, { useEffect, useState } from 'react';
import JobCardInfo from '../JobCardInfo/JobCardInfo';
import Job from '../Job/Job';


const JobCard = () => {

    const [jobsData, setJobsData] = useState([]);
    const [visible, setVisible] = useState(4);

    const showMoreItems = () =>{
        setVisible((prevValue) => prevValue + 2);
    };

    useEffect(() => {
        fetch('JobData.json')
            .then(res => res.json())
            .then(data => setJobsData(data))
    }, [])

    //console.log(visible)
    let button;
    if(visible === 4){
        button = <button style={ {background:' linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)'}} className='mt-5 mb-16 text-center mx-auto flex justify-center px-5 py-2 rounded text-white' onClick={showMoreItems}>See All Jobs</button>
    }

    return (
        <div className='p-5 md:p-0'>
           
            <div className='text-center mb-7'>
                <h1 className='text-xl md:text-4xl font-bold mb-4'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='md:mx-60 '>
                <div className='grid lg:grid-cols-2 justify-items-center gap-5'>
                    {
                        jobsData.slice(0, visible).map(jobData => <JobCardInfo
                            key={jobData._id}
                            jobData={jobData}
                            
                        ></JobCardInfo>)
                    }
                    
                </div>
            </div>
            {button}
            
        </div>
    );
};

export default JobCard;