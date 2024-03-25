import React from 'react'

export const Navbar = () => {

    return (
        <div>
            <nav className="border py-5 bg-slate-50 top-0 ">
                <div className='px-16 flex flex-row justify-between'>
                    <div>
                        TDG
                    </div>
                    <div className='flex flex-row gap-x-10'>
                        <div>
                            Join Waitlist
                        </div>
                        <div>
                            Luma
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


