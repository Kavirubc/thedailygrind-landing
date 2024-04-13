import React from 'react'

export const Calendar = () => {
    return (
        <main className="flex flex-col justify-center items-center text-center bg-white px-4 pb-40 gradient-background sm:px-6 md:px-8">
            <h1 className='text-4xl sm:text-5xl font-bold pb-10'>
                Subscribe us on <br /><span className='bg-black text-white text-3xl'>LU.MA</span>
            </h1>
            <iframe
            className='rounded-xl shadow-lg shadow-cyan-100 max-w-sm md:max-w-md lg:max-w-5xl'
                src="https://lu.ma/embed/calendar/cal-eIHkrf3p9WieHOL/events?lt=light"
                width="700"
                height="450"
                frameBorder={0}
                style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                allowFullScreen
                aria-hidden={false}
                tabIndex={0}
            ></iframe>
        </main>
    )
}
