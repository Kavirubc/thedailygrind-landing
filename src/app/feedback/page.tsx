'use client'
import FeedbackCard from '@/components/feedbackCard/page'
import React from 'react'
import { useRouter } from 'next/navigation'

function Page() {

    const router = useRouter()


    const handleOnlick = () => {
        router.push('/feedback/add')
    }

    return (
        <main className='mt-[70px]'>
            <button onClick={handleOnlick}>Add FeedBack</button>
            <FeedbackCard
                name='Kaviru Hapuarachchi'
                email='kaviru@thedailygrind.com'
                feedback='This is a test feedback'
                date='2023-03-01'
            />
        </main>


    )
}

export default Page
