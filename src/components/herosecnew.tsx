import React from 'react';
import Image from 'next/image';
import hero from '@/../public/logo2.png';
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';

export const Herosecnew = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-[70px]'>
            <div className='max-w-5xl w-full'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-12'>
                    {/* Image Section */}
                    <div className='w-full sm:w-2/3 lg:w-1/3'>
                        <Image
                            className='rounded-xl shadow-lg object-cover'
                            src={hero}
                            alt='Hero'
                            priority
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                        {/* Title */}
                        <h1 className='text-3xl sm:text-4xl font-extrabold leading-tight'>
                            The Daily Grind
                        </h1>
                        <h2 className='text-xl sm:text-2xl font-semibold mt-2 bg-black text-white inline-block px-3 py-1'>
                            Season 3 is Here!
                        </h2>

                        {/* Updated Description */}
                        <p className='text-base sm:text-base max-w-lg mt-4 leading-relaxed'>
                            The award-winning program,
                            <span className=' font-bold'>recognized by Sysco Labs and Global Learning Labs </span>, is back with fresh insights to help you master productivity, build lasting habits, and make every week exceptional.
                            {/* Join us every Sunday at
                            <span className='text-base bg-yellow-300 text-black font-semibold px-1'>9 PM</span>. */}
                        </p>
                        <p className='text-base sm:text-base max-w-lg mt-4 leading-relaxed'>
                            This season brings new strategies, expert advice, and a vibrant community to keep you motivated.
                        </p>


                        {/* Buttons */}
                        <div className='flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-4 mt-6'>
                            <Link target='_blank' href='https://lu.ma/thedailygrind'>
                                <button className='px-6 py-2 border border-black flex flex-row gap-x-2 hover:border-white hover:text-white hover:bg-black transition-all duration-300'>
                                    Register Now <IconArrowUpRight />
                                </button>
                            </Link>
                        </div>

                        {/* Disclaimer */}
                        <p className='text-xs text-slate-400 hover:text-slate-900 my-4'>
                            *All updates will be sent via Luma.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
