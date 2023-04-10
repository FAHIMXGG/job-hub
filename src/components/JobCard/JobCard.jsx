import React, { useEffect, useState } from 'react';
import JobCardInfo from '../JobCardInfo/JobCardInfo';
import Job from '../Job/Job';


const JobCard = () => {

    const [jobsData, setJobsData] = useState([]);
    useEffect(() => {
        fetch('JobData.json')
            .then(res => res.json())
            .then(data => setJobsData(data))
    }, [])

    

    return (
        <div className='p-5 md:p-0'>
           
            <div className='text-center mb-7'>
                <h1 className='text-xl md:text-4xl font-bold mb-4'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='md:mx-60 '>
                <div className='grid lg:grid-cols-2 justify-items-center gap-5'>
                    {
                        jobsData.map(jobData => <JobCardInfo
                            key={jobData._id}
                            jobData={jobData}
                            
                        ></JobCardInfo>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default JobCard;