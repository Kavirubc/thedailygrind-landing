import React from 'react'
import Image from 'next/image'
import hero from '@/../public/hero1.png'

export const Herosec = () => {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center align-middle content-center'>
            <div className='max-w-4xl'>
                <div className='flex flex-row items-center'>
                    <div className='w-1/2'>
                        <Image src={hero} alt='Hero' />
                    </div>
                    <div className='ml-10'>
                        <h1 className='text-6xl font-bold'>
                            Join waitlist now
                        </h1>
                        <div>
                            <button className='px-6 py-2 border border-black mt-10 '>
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
