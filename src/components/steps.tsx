import Image from 'next/image';
import React from 'react';
import steps from '@/../public/ActionPost.png'

export const Steps = () => {
    return (

        <main className="flex flex-col justify-center items-center text-center bg-white px-4 pb-40 gradient-background sm:px-6 md:px-8">
            <div>
                <h1 className="font-bold text-4xl sm:text-4xl">
                    What we will be
                </h1>
                <h1 className="mt-2 font-bold text-4xl text-black py-1 bg-yellow-200/70 shadow-lg rounded-lg sm:text-5xl">
                    Doing
                </h1>
            </div>
            <div className='w-2/3 md:w-1/3 lg:w-1/3 mt-10 lg:mt-20 '>
                <Image className='rounded-xl shadow-lg shadow-cyan-100' src={steps} alt='Hero' />
            </div>
            {/* <div className="flex flex-col gap-y-12 mt-32 md:flex-row md:gap-x-12 justify-around group">
                <div className="transition duration-300 ease-in-out transform hover:-translate-y-3 shadow-md w-auto min-w-48 lg:w-72 h-auto lg:h-80 rounded-xl bg-gray-100 px-3 lg:px-0">
                    <h2 className="mt-8 font-bold text-2xl sm:text-3xl ">
                        Step 1: Join Waitlist
                    </h2>
                    <p className="mt-5 mb-5 max-w-2xl text-base">
                        Start your journey by signing up on our waitlist.
                    </p>
                </div>
                <div className="transition duration-300 ease-in-out transform hover:-translate-y-3 shadow-md w-auto min-w-48 lg:w-72 h-auto lg:h-80 rounded-xl bg-gray-100 px-3 lg:px-0">
                    <h2 className="mt-8 font-bold text-2xl sm:text-3xl">
                        Step 2: Subscribe
                    </h2>
                    <p className="mt-5 mb-5 max-w-2xl text-base">
                        Keep up-to-date by subscribing to our event calendar.
                    </p>
                </div>
                <div className="transition duration-300 ease-in-out transform hover:-translate-y-3 shadow-md w-auto min-w-48 lg:w-72 h-auto lg:h-80 rounded-xl bg-gray-100 px-3 lg:px-0">
                    <h2 className="mt-8 font-bold text-2xl sm:text-3xl">
                        Step 3: Register
                    </h2>
                    <p className="mt-5 mb-5 max-w-2xl text-base">
                        Complete your registration to secure your spot at the event.
                    </p>
                </div>
            </div> */}
        </main>

    );
};
