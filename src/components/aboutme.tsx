import React from 'react';
import Image from 'next/image';
import pro from '@/../public/a.png';
import pro2 from '@/../public/danidu.jpeg';
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';
import { Ghost, Handshake } from 'lucide-react';

export const Aboutme = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 bg-violet-100 lg:px-8 py-20'>
            <h1 className='text-3xl sm:text-5xl font-bold mb-36'>
                About <span className='bg-black text-white px-2'>us</span>
            </h1>
            <div className='max-w-4xl w-full justify-center items-center content-center'>
                <div className='flex text-center flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12 gap-x-20'>
                    <div className='flex flex-col items-center text-center'>
                        <div className=' mb-8 lg:mb-0'>
                            <Image className='rounded-xl shadow-lg' height={200} src={pro} alt='Hero' />
                        </div>
                        <div className='lg:mt-6 text-center '>
                            <p className='font-semibold text-lg'>Kaviru Hapuarachchi</p>
                            <p className='text-base max-w-xs mb-5 mt-2'>
                                Productivity Nerd working with NextJS
                            </p>
                            <div className='flex flex-row py-4 justify-center '>
                                <Link target='_blank' href='https://kaviru.cc/'>
                                    <button className='px-5 py-1 border border-black flex items-center flex-row gap-x-1 hover:text-white hover:bg-violet-600'>
                                        Let&apos;s talk <Handshake height={18} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center content-center items-center'>
                        <div className=' mb-8 lg:mb-0'>
                            <Image className='rounded-xl shadow-lg' height={200} src={pro2} alt='Hero' />
                        </div>
                        <div className='lg:mt-6 text-center'>
                            <p className='font-semibold text-lg'>Danidu Nanayakkara</p>
                            <p className='text-base max-w-xs mb-5 mt-2'>
                                Productivity Nerd working with NextJS
                            </p>
                            <div className='flex flex-row py-4 justify-center'>
                                <Link target='_blank' href='https://linktr.ee/danidun'>
                                    <button className='px-5 py-1 border border-black flex items-center flex-row gap-x-1 hover:text-white hover:bg-violet-600'>
                                        Let&apos;s talk <Handshake height={18} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    );
}

