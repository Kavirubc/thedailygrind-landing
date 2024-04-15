import React from 'react';
import Image from 'next/image';
import hero from '@/../public/hero1.png';
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';
import { CalendarCheck2 } from 'lucide-react';

export const Herosecnew = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl w-full'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='w-1/2 md:w-1/2 lg:w-1/2 mb-8 lg:mb-0'>
                        <Image className='rounded-xl shadow-lg' src={hero} alt='Hero' />
                    </div>
                    <div className='lg:ml-10 lg:text-left'>
                        <h1 className='text-4xl sm:text-5xl font-bold '>
                            Welcome to the
                        </h1>
                        <h1 className='text-4xl sm:text-6xl font-bold bg-black text-white '>
                            Daily Grind
                        </h1>
                        <p className='text-base max-w-2xl mb-5 mt-5' >
                            Join the first <span className='text-lg bg-yellow-300 text-black font-semibold'> Daily Review session </span> of The Daily Grind at <br /><span className='text-lg bg-yellow-300 text-black font-semibold'>9 PM on Sunday, 14th to 21st of April 2024.</span> <br /> Reserve your spot now!
                        </p>
                        <div className='flex flex-row py-4 justify-center lg:justify-start gap-x-3'>
                            <Link target='_blank' href='https://lu.ma/thedailygrind01'>
                                <button className='px-2 py-1 border border-black flex flex-row gap-x-1 hover:border-white hover:text-white hover:bg-black'>
                                    Register Now <IconArrowUpRight />
                                </button>
                            </Link>
                            <Link target='_blank' href='https://lu.ma/thedailygrind'>
                                <button className='px-5 py-1 border items-center border-black flex flex-row gap-x-1 hover:border-violet-600 hover:text-white hover:bg-purple-pink-gradient'>
                                    Calendar <CalendarCheck2 height={18} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
