import React from 'react'
import { Copyright } from 'lucide-react';

export const Footer = () => {
    return (
        <main className='flex flex-row min-h-[50px] gradient-background  justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-black text-white text-base'>

            <div className=''>
                <Copyright
                    height={15}
                />
            </div>
            kode24
        </main>
    )
}
