import React from 'react';
import Image from 'next/image';
import hero from '@/../public/logo2.png';
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
                        <p className='text-base max-w-2xl mb-5 mt-5'>
                            Join the <span className='text-lg bg-yellow-300 text-black'>Weekly Review sessions</span> of The Daily Grind at <br /><span className='text-lg bg-yellow-300 text-black font-semibold'>9 PM, every Sunday</span>. <br /> 
                        </p>
                        <p className='text-base max-w-xl mb-5 mt-5'>Get weekly insights, <span className='text-lg bg-yellow-300 text-black'>productivity tips, practical advice and sustainable work habits </span> to make your week exceptional.</p>

                        <div className='flex flex-col py-4 justify-center lg:justify-left items-left gap-y-1'>
                            <Link target='_blank' href='https://lu.ma/thedailygrind'>
                                <button className='px-2 py-1 border border-black flex flex-row gap-x-1 hover:border-white hover:text-white hover:bg-black'>
                                    Register Now <IconArrowUpRight />
                                </button>
                            </Link>
                            <div>
                            <p className='text-sm text-slate-400 hover:text-slate-900 mt-2'>
                                *You will get all your updates through Luma.
                            </p>
                        </div>
                            {/* <Link target='_blank' href='https://www.google.com/calendar/render?cid=http%3A%2F%2Fapi.lu.ma%2Fics%2Fget%3Fentity%3Dcalendar%26id%3Dcal-eIHkrf3p9WieHOL'>
                                <button className='px-5 py-1 border items-center border-black flex flex-row gap-x-1 hover:border-violet-600 hover:text-white hover:bg-purple-pink-gradient'>
                                    Calendar <CalendarCheck2 height={18} />
                                </button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
