import React from 'react';
import Image from 'next/image';
import hero from '@/../public/hero1.png';
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';

export const About = () => {

    return (
        <main className='flex bg-white flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl w-full'>
                <div className='flex flex-col lg:flex-row items-center'>

                    <div className='lg:mr-10 lg:text-left'>
                        <h1 className='text-4xl sm:text-5xl font-bold'>
                            What is <br /><span className='bg-black text-white text-3xl'>The Daily Grind</span>
                        </h1>
                        <p className='text-base max-w-2xl mb-5 mt-5' >
                            We provide you with tools and support to enhance your focus and growth through daily focus sessions, expert-led learning opportunities, and personalized tools tailored to your priorities.
                        </p>
                        <div className='flex flex-row py-4 justify-center lg:justify-start'>
                            <Link target='_blank' href='https://7xpfl4akzfq.typeform.com/to/FQpowPzY'>
                                <button className='px-5 py-1 border border-black flex flex-row gap-x-1 hover:border-white hover:text-white hover:bg-black'>
                                    Read the Blog <IconArrowUpRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/2 md:w-1/2 lg:w-1/2 mb-8 lg:mb-0'>
                        <Image className='rounded-xl shadow-lg' src={hero} alt='Hero' layout="responsive" />
                    </div>
                </div>
            </div>
        </main>
    );
}


