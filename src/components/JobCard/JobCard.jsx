import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobCard = () => {

    const jobsData = useLoaderData();
    console.log(jobsData);

    return (
        <div>
            
        </div>
    );
};

export default JobCard;