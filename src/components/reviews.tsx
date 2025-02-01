import React from 'react';
import { IconBrandLinkedin } from "@tabler/icons-react";

export const Reviews = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gray-200 py-40'>
            <h1 className="font-bold text-4xl sm:text-4xl">
                Reviews
            </h1>
            <div className='flex flex-col gap-y-10 mt-16 lg:flex-row lg:gap-x-10'>
                {/* Review 1 */}
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-left">
                    <div className="flex flex-col gap-y-2 mb-4">
                        <h3 className="font-semibold text-lg">Pankaja Balasooriya</h3>
                        <p className="text-sm text-gray-500">
                            University of Moratuwa | ENTC
                        </p>
                        <a
                            href="https://www.linkedin.com/in/pankajabalasooriya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:underline"
                        >
                            <IconBrandLinkedin size={16} className="mr-1" />
                            
                        </a>
                    </div>
                    <p className="font-normal text-gray-700 text-sm">
                        Participating in The Daily Grind's weekly review sessions has greatly improved my productivity and personal growth. These sessions help me reflect on what I’ve done, recognize what worked well, and identify areas to improve. They keep me focused on my goals and help me plan for the week ahead. Being part of a group with like-minded people makes a big difference, as we share ideas, motivate each other, and stay on track together. The supportive community and regular check-ins have been key to staying productive and committed to my growth, and I highly recommend The Daily Grind to anyone looking to better themselves.
                    </p>
                </div>

                {/* Review 2 */}
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-left">
                    <div className="flex flex-col gap-y-2 mb-4">
                        <h3 className="font-semibold text-lg">Shakthi Warnakulasuriya</h3>
                        <p className="text-sm text-gray-500">
                            University of Westminster | Trainee DevOps Engineer - Cloud Engineering - IFS | Github Campus Expert
                        </p>
                        <a
                            href="https://www.linkedin.com/in/shakthi-warnakulasuriya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:underline"
                        >
                            <IconBrandLinkedin size={16} className="mr-1" />
                            
                        </a>
                    </div>
                    <p className="font-normal text-gray-700 text-sm">
                        Joining The Daily Grind completely transformed my perspective on productivity. The Weekly Review sessions and consistent planning helped me balance campus work and personal projects, leading to an internship. In just a few months, I built lifelong habits, stayed focused on what mattered, and became more productive without feeling overwhelmed.
                    </p>
                </div>
            </div>
        </main>
    );
};
