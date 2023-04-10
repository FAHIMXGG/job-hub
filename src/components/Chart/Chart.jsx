import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            subject: 'A-1',
            AssignmentMarks: 60,
            B: 110,
            fullMark: 60,
        },
        {
            subject: 'A-2',
            AssignmentMarks: 60,
            B: 130,
            fullMark: 60,
        },
        {
            subject: 'A-3',
            AssignmentMarks: 60,
            B: 130,
            fullMark: 60,
        },
        {
            subject: 'A-4',
            AssignmentMarks: 60,
            B: 100,
            fullMark: 60,
        },
        {
            subject: 'A-5',
            AssignmentMarks: 60,
            B: 90,
            fullMark: 60,
        },
        {
            subject: 'A-6',
            AssignmentMarks: 60,
            B: 85,
            fullMark: 60,
        },
        {
            subject: 'A-7',
            AssignmentMarks: 60,
            B: 85,
            fullMark: 60,
        },
        {
            subject: 'A-8',
            AssignmentMarks: 60,
            B: 85,
            fullMark: 60,
        },
    ];
    return (
        <div className=' bg-[#F7F6FB] '>
            <div className=' md:invisible py-10'>
                <RadarChart
                    width={300}
                    height={150}
                    data={data}
                >
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    {/* <Line
                dataKey="uv"
                ></Line> */}
                    <Radar
                        dataKey="AssignmentMarks"
                        stroke="#8884d8"
                        fill="#8884d8" fillOpacity={0.6}
                    ></Radar>


                </RadarChart>
            </div>
            <div className='md:mx-auto md:flex md:justify-center md:pb-52 invisible md:visible'>
                <RadarChart
                    width={1000}
                    height={600}
                    data={data}
                >
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    {/* <Line
                dataKey="uv"
                ></Line> */}
                    <Radar
                        dataKey="AssignmentMarks"
                        stroke="#8884d8"
                        fill="#8884d8" fillOpacity={0.6}
                    ></Radar>


                </RadarChart>
            </div>
        </div>
    );
};

export default Chart;   