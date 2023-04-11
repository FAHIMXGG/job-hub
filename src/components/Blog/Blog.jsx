import React from 'react';

const Blog = () => {
    return (
        <div className='mb-10'>
            <div className='bg-[#F9F8FF] text-center mb-5'>
                <h1 className='font-bold text-2xl py-32'>Blog</h1>
            </div>
            <div className='px-10'>
                <div className='border text-center bg-[#F9F8FF] p-5'>
                    <h1 className='mb-2'>When should you use contextAPI?</h1>
                    <p>If I set contextAPI any component I can send any data to another <br />  components by declare contextAPI Hook</p>
                </div>
            </div>
            <div className='px-10 mt-5'>
                <div className='border text-center bg-[#F9F8FF] p-5'>
                    <h1 className='mb-2'>What is custom Hook?</h1>
                    <p>custom Hook is Reusable function. <br />
                    By using custom Hook I can share data a component to another component <br />
                    I already used this method in this projects "JobCardInfo" component <br />
                    I share data JobCardInfo to details by using useLocation hook
                    </p>
                </div>
            </div>
            <div className='px-10 mt-5'>
                <div className='border text-center bg-[#F9F8FF] p-5'>
                    <h1 className='mb-2'>what is useRef, useMemo?</h1>
                    <p>useRef store local mutable value in a component <br />
                    useMemo is a React hook that returns a memoized value
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;