import React from 'react';
import Image from 'next/image';
import hero from '@/../public/herocap.png';
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';
import { BookOpenCheck, Newspaper } from 'lucide-react';

export const About = () => {
    return (
        <main className=' py-20 flex bg-white flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 gradient-background lg:px-8'>
            <div className='max-w-4xl w-full'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='w-1/2 md:w-1/2 lg:w-1/2 mb-8 lg:mb-0 lg:hidden block'>
                        <Image className='rounded-xl shadow-lg' src={hero} alt='Hero' layout="responsive" />
                    </div>
                    <div className='lg:mr-10 lg:text-left'>
                        <h1 className='text-4xl sm:text-5xl font-bold'>
                            What is <br /><span className='bg-black text-white text-3xl'>The Daily Grind</span>
                        </h1>
                        <p className='text-base max-w-2xl mb-5 mt-5'>
                            Welcome to Daily Grind! We offer tools and support to boost your productivity and sustainability. In our sessions, we will <span className='text-xl  bg-pink-300 rounded px-1 text-black'> review our weekend, plan the upcoming week, and share practical advice </span> to make the most of your time.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                            <div className='bg-gray-50 p-4 rounded-lg'>
                                <p className='font-bold text-2xl'>100+</p>
                                <p className='text-sm'>Participants across sessions</p>
                            </div>
                            <div className='bg-gray-50 p-4 rounded-lg'>
                                <p className='font-bold text-2xl'>30+</p>
                                <p className='text-sm'>Sessions conducted</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='font-bold mb-2'>Partnered Universities</p>
                                <div className='grid grid-cols-2 gap-2 text-sm'>
                                    {['UOC', 'UOM', 'UOJ', 'UO-Jaffna', 'UO-Westminster', 'SLIIT',
                                        'APIIT', 'Swinburne (AUS)', 'UO-Plymouth (ICBT)',
                                        'Robert Gordon (IIT)'].map((uni) => (
                                            <span key={uni} className='bg-gray-50 px-3 py-1 rounded'>
                                                {uni}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>

                        {/* <div className='flex flex-wrap gap-4 mb-6 justify-center lg:justify-start'>
                            <div className='text-center'>
                                <p className='font-bold text-xl'>152</p>
                                <p className='text-sm'>Newsletter Subscribers</p>
                            </div>
                            
                        </div> */}

                        <div className='flex flex-row py-4 justify-center lg:justify-start gap-3'>
                            <Link target='_blank' href='https://medium.com/@kaviru'>
                                <button className='px-5 py-1 border items-center  border-black flex flex-row gap-x-2 hover:border-white hover:text-white hover:bg-black'>
                                    Blog <Newspaper height={18} />
                                </button>
                            </Link>
                            <Link target='_blank' href='https://www.blog.thedailygrind.club/'>
                                <button className='px-5 py-1 border items-center  border-black flex flex-row gap-x-2 hover:border-white hover:text-white hover:bg-black'>
                                    Newsletter<Newspaper height={18} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/2 md:w-1/2 lg:w-1/2 mb-8 lg:mb-0 lg:block hidden'>
                        <Image className='rounded-xl shadow-lg' src={hero} alt='Hero' layout="responsive" />
                    </div>
                </div>
            </div>
        </main>
    );
}
