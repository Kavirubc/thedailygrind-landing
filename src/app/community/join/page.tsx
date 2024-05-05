"use client";
import React, { useEffect, useState } from "react";
import { taskSubmit } from "@/app/api/actions";
import { useUser } from "@clerk/nextjs";

import Swal from "sweetalert2";
import { Navbar } from "@/components/navbar";

function Page() {
    const [fileError, setFileError] = useState("");
    const [display, setDisplay] = useState({
        form: true,
        success: false,
        error: false,
    });

    const { isLoaded, user } = useUser();



    const handleOnSubmit = async (e: any) => {
        e.preventDefault();

        const formData = {
            name: user?.firstName,
            lname: user?.lastName,
            email: e.target.email.value,
            post: e.target.post.value,
        };
        try {
            await taskSubmit(formData);
            setDisplay({ form: false, success: true, error: false });
        } catch (error) {
            setFileError("You are already submitted");
            
            Swal.fire({
                title: "Go back!",
                text: "You are already submitted!",
                icon: "error",
            }).then((response: any) => {
                if (response.isConfirmed) {
                    window.location.href = "/community";
                }
            });
            
        }
    };



    useEffect(() => {
        if (display.success) {
            Swal.fire({
                title: "Success!",
                text: "Submission successful!",
                icon: "success",
            }).then((response: any) => {
                if (response.isConfirmed) {
                    window.location.href = "/community";
                }
            });
        } else if (display.error) {
            Swal.fire({
                title: "Failed!",
                text: "Submission failed. Please try again!",
                icon: "error",
            });
        }
    }, [display.success, display.error]);

    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center text-black font-sans mx-4 md:mx-0 mb-10 w-full min-h-screen">
               
                <h1 className="text-3xl md:text-4xl font-bold text-center pt-36 pb-16">
                    Join waitlist
                </h1>

                <form className="mt-20 mb-20 flex flex-col" onSubmit={handleOnSubmit}>
                    <label htmlFor="email" className="mb-2">
                        Enter your email.
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="py-2 px-4 border border-black mb-3 text-black"
                        required
                    />

                    <label htmlFor="post" className="mb-2">
                        Enter reason for joining.
                    </label>
                    <input
                        name="post"
                        type="text"
                        placeholder="Reason"
                        className="pt-2 pb-5 px-4 border border-black mb-3 text-black"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                    >
                        Submit
                    </button>
                    {fileError && <p className="text-red-500">{fileError}</p>}
                </form>
            </main>

        </>
    );
}

export default Page;
