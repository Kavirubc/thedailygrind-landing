import React from 'react';

interface FeedbackCardProps {
    name: string;
    email: string;
    feedback: string;
    date: string;
}

function FeedbackCard(props: FeedbackCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Title</h2>
            <p className="text-gray-600">
                <span className="font-semibold">Name:</span> {props.name}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {props.email}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Feedback:</span> {props.feedback}
            </p>
            <p className="text-gray-500 text-sm">
                <span className="font-semibold">Date:</span> {props.date}
            </p>
        </div>
    );
}

export default FeedbackCard;
