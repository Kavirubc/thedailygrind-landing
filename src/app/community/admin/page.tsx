'use client'
import { getAllSubmissions } from "@/app/api/actions";
import React, { useState, useEffect } from "react";
import { WithId, Document, ObjectId } from "mongodb";

type Submission = {
    _id: string; // Convert _id to string
    name: string;
    lname: string;
    email: string;
    post: string;
    created: Date;
};

async function fetchSubmissions(): Promise<Submission[]> {
    try {
        const submissions = await getAllSubmissions();
        // Convert _id to string
        return submissions.map(submission => ({
            ...submission,
            _id: submission._id.toString(),
            name: submission.name,
            lname: submission.lname,
            email: submission.email,
            post: submission.post,
            created: submission.created
        }));
    } catch (error) {
        console.error("Error retrieving submissions:", error);
        return [];
    }
}

function DisplayAllSubmissions() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSubmissions();
            setSubmissions(data);
        };

        fetchData(); // Fetch immediately on mount
        const intervalId = setInterval(fetchData, 30000); // Refresh every 24 hours

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-3xl font-bold text-center mb-6">Submissions</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Post
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {submission.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {submission.lname}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {submission.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {submission.post}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {submission.created.toString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function Page() {
    return (
        <div className="py-10">
            <DisplayAllSubmissions />
        </div>
    );
}

export default Page;
