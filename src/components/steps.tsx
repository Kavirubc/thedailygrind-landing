import React from 'react';

export const Steps = () => {
    return (

        <main className='flex bg-green-100 flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 md:px-8'>
            <div>
                <h1 className='text-4xl sm:text-5xl font-bold'>
                    What we will be
                </h1>
                <h1 className='text-4xl mt-2 sm:text-5xl font-bold bg-black text-white '>
                    Doing
                </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-y-12 md:gap-x-12 mt-12 md:mt-32 justify-around group'>
                <div className='shadow-md lg:w-72 w-auto min-w-48 lg:h-80 h-auto rounded-xl bg-slate-100 transition duration-300 ease-in-out transform hover:-translate-y-5 px-3 lg:px-0'>
                    <h1 className='text-2xl sm:text-3xl font-bold mt-8'>
                        Step 1
                    </h1>
                    <p className='text-base max-w-2xl mb-5 mt-5'>
                        Sign up for the event
                    </p>
                </div>
                <div className='shadow-md lg:w-72 w-auto min-w-48 lg:h-80 h-auto rounded-xl bg-slate-100 transition duration-300 ease-in-out transform hover:-translate-y-5 px-3 lg:px-0'>
                    <h1 className='text-2xl sm:text-3xl font-bold mt-8'>
                        Step 2
                    </h1>
                    <p className='text-base max-w-2xl mb-5 mt-5'>
                        Attend the event
                    </p>
                </div>
                <div className='shadow-md lg:w-72 w-auto min-w-48 lg:h-80 h-auto rounded-xl bg-slate-100 transition duration-300 ease-in-out transform hover:-translate-y-5 px-3 lg:px-0'>
                    <h1 className='text-2xl sm:text-3xl font-bold mt-8'>
                        Step 3
                    </h1>
                    <p className='text-base max-w-2xl mb-5 mt-5'>
                        Enjoy the event
                    </p>
                </div>
            </div>
        </main>
    );
};
