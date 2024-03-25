'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/../public/log.png'; // Make sure this path is correct
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Importing Lucide icons

export const Navbar = () => {
    // State to manage the mobile menu's visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <nav className="border py-5 bg-slate-50 top-0 z-50 relative">
                <div className='px-5 md:px-16 flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-between items-center'>
                        <Image src={logo} width={34} height={10} alt='logo' />
                    </div>
                    <div>
                        <div className='md:hidden'>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                        <div className={`${isMenuOpen ? 'flex' : 'hidden'
                            } absolute flex-col top-full left-0 w-full bg-slate-50 md:static md:flex md:flex-row md:gap-x-10 content-center align-middle items-center`}>
                            <Link target='_blank' href='https://7xpfl4akzfq.typeform.com/to/FQpowPzY'>
                                <div className='text-slate-600 hover:text-slate-900 cursor-pointer hover:underline px-4 py-2 md:py-0' >
                                    Join Waitlist
                                </div>
                            </Link>
                            <Link target='_blank' href='https://lu.ma/thedailygrind'>
                                <div className='text-slate-600 hover:text-slate-900 cursor-pointer hover:underline px-4 py-2 md:py-0' >
                                    Subscribe on Luma
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
