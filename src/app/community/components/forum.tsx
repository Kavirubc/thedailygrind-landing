import React, { useState } from 'react';
import { postSubmit } from '@/app/api/forum/actions';
import { useUser } from '@clerk/nextjs';


function Forum() {
    // Initialize state for title and content
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Get the current user
    const { user } = useUser();


    const FormData = {
        name: user?.firstName,
        lname: user?.lastName,
        // email: user?.emailAddress,
        title: title,
        content: content,

    }

    const [display, setDisplay] = useState({
        form: true,
        success: false,
        error: false,
    });


    // Handler for form submission
    const handleSubmit = (event:any) => {
        event.preventDefault();
        try {
            postSubmit(FormData);
            setDisplay({ form: false, success: true, error: false });
        } catch (error) {
            console.error("Error submitting post:", error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
                <div className="mb-6">
                    <label htmlFor="title" className="block text-lg font-semibold text-gray-700">Title</label>
                    <input
                        id="title"
                        type="text"
                        className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="content" className="block text-lg font-semibold text-gray-700">Content</label>
                    <textarea
                        id="content"
                        rows={10}
                        className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Submit
                </button>
            </form>
        </main>
    );
}

export default Forum;
