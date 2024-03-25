import React from 'react'
import Image from 'next/image'
import hero from '@/../public/hero1.png'
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';
export const Herosec = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center align-middle content-center'>
            <div className='max-w-4xl'>
                <div className='flex flex-row items-center'>
                    <div className='w-1/2'>
                        <Image className='rounded-xl shadow-lg' src={hero} alt='Hero' />
                    </div>
                    <div className='ml-10'>
                        <h1 className='text-5xl font-bold'>
                            Coming <span className='bg-black text-white'>Soon</span>
                        </h1>
                        <p className='text-base max-w-2xl mt-5'>
                            Shape Your Future, Daily: Engage in Focus Sessions, Learn from Experts, and More. Tools to Help You Focus on What Matters Most to You.
                        </p>
                        <div className='flex flex-row py-4 '>
                            <Link target='_black' href='https://7xpfl4akzfq.typeform.com/to/FQpowPzY'>
                                <button className='px-5 py-1 border border-black flex flex-row gap-x-1 hover:border-white hover:text-white hover:bg-black'>
                                    Join waitlist <IconArrowUpRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
