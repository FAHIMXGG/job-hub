import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const JobInfoData = ({d}) => {

    console.log(d)
    return (
        <div>
            {d._id}
        </div>
    );
};

export default JobInfoData;