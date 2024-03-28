import React from 'react'

export const Steps = () => {
    return (
        <main className='flex bg-green-200 flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <div>
                <h1 className='text-2xl sm:text-5xl font-bold'>
                    What we will be <span className=' bg-white text-black rounded-md'>Doing</span>
                </h1>
            </div>
            <div className='flex flex-row gap-x-12 mt-32 justify-around group'>
                <div className='shadow-lg  w-72 h-80 rounded-xl  bg-slate-100 transition duration-300 ease-in-out transform hover:-translate-y-5'>
                    <h1 className='text-2xl sm:text-3xl font-bold mt-8'>
                        Step 1
                    </h1>
                    <p className='text-base max-w-2xl mb-5 mt-5' >
                        Sign up for the event
                    </p>
                </div>
                <div className='shadow-lg  w-72 h-80 rounded-xl  bg-slate-100 transition duration-300 ease-in-out transform hover:-translate-y-5'>
                    <h1 className='text-2xl sm:text-3xl font-bold mt-8'>
                        Step 1
                    </h1>
                    <p className='text-base max-w-2xl mb-5 mt-5' >
                        Sign up for the event
                    </p>
                </div>
                <div className='shadow-lg  w-72 h-80 rounded-xl  bg-slate-100 transition duration-300 ease-in-out transform  hover:-translate-y-5'>
                    <h1 className='text-2xl sm:text-3xl font-bold mt-8'>
                        Step 1
                    </h1>
                    <p className='text-base max-w-2xl mb-5 mt-5' >
                        Sign up for the event
                    </p>
                </div>

            </div>
        </main>
    )
}


