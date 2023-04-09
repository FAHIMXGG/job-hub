import React from 'react';
import JobCategory from '../JobCategory/JobCategory';
import JobCard from '../JobCard/JobCard';


const HomePage = () => {
    return (
        <div>
            <JobCategory></JobCategory>
            <JobCard></JobCard>
        </div>
    );
};

export default HomePage;