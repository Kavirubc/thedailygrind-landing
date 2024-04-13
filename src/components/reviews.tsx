import React from 'react'

export const Reviews = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gray-200'>
            <h1 className="font-bold text-4xl sm:text-4xl">
                Reviews
            </h1>
            <div className='flex flex-col gap-y-5 mt-16 lg:flex-row lg:gap-x-5'>
                <div
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                >

                    <p className="font-normal text-gray-700 ">
                        It was great actually , procrastination is a big problem and have to give more effort towards my studies and been putting that behind a lot. This session gave me a lot of insight and also gave me some motivation to get started with them so thank u so much for sharing the link last minute. Appreciate it a lot.
                    </p>
                </div>

                <div
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                >

                    <p className="font-normal text-gray-700 ">
                        It was good. Explanations were clear and would love to join again. Keep up the good work and all the best.
                    </p>
                </div>

                <div
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                >

                    <p className="font-normal text-gray-700 ">
                        Google calender idea is very good.Hope to plan my day through it.The ideas discussed are good.Overall everything was good.
                    </p>
                </div>
            </div>

        </main>
    )
}

