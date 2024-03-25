import Image from 'next/image'
import React from 'react'
import logo from '@/../public/log.png'


export const Navbar = () => {

    return (
        <div>
            <nav className="border py-5 bg-slate-50 top-0 ">
                <div className='px-16 flex flex-row justify-between'>
                    <div className='flex flex-row justify-center items-center'>
                        <Image src={logo.src} width={34} height={10} alt='logo' />
                        {/* <p>
                            TDG
                        </p> */}
                    </div>
                    <div className='flex flex-row gap-x-10 content-center align-middle items-center'>
                        <div className='text-slate-600 hover:text-slate-900 cursor-pointer hover:underline'>
                            Join Waitlist
                        </div>
                        <div className='text-slate-600 hover:text-slate-900 cursor-pointer hover:underline'>
                            Luma
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


