import React from 'react';
import Image from 'next/image';
import pro from '@/../public/a.png';
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';

export const Aboutme = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 bg-violet-200 lg:px-8'>
            <div className='max-w-4xl w-full'>
                <div className='flex flex-col items-center'>
                    <div className='w-1/2 md:w-1/2 lg:w-1/3 mb-8 lg:mb-0'>
                        <Image className='rounded-xl shadow-lg' src={pro} alt='Hero' />
                    </div>
                    <div className='lg:mt-10 lg:text-left'>
                        <h1 className='text-3xl sm:text-5xl font-bold'>
                            About <span className='bg-black text-white'>me</span>
                        </h1>
                        <p className='text-base max-w-2xl mb-5 mt-5' >
                            Productivity Nerd working with NextJS
                        </p>
                        <div className='flex flex-row py-4 justify-center lg:justify-start'>
                            <Link target='_blank' href='https://kh.ko-de.org/'>
                                <button className='px-5 py-1 border border-black flex flex-row gap-x-1 hover:text-white hover:bg-violet-600'>
                                    View Portfolio <IconArrowUpRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

