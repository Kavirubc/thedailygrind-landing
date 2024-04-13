import React from 'react'

export const Calendar = () => {
    return (
        <main className="flex flex-col justify-center items-center text-center bg-white px-4 pb-40 gradient-background sm:px-6 md:px-8">
            <iframe
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
