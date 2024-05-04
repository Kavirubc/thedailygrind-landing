"use client";
import { Navbar } from "@/components/navbar";
import logo from "../../public/logo.png";
import { Herosecnew } from "@/components/herosecnew";

import { useUser } from "@clerk/nextjs";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { User } from "lucide-react";



export default function Home() {

    const { isSignedIn, user } = useUser();


    if (isSignedIn) {
        return (

<>
                <Navbar />
                <main className=" flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                

                Welcome to community..
                <br />
                Coming soon

                <div>
                        <SignedIn />
                        <SignedOut />
                </div>
            </main>
            </>
        );

    }
    return (
        <>
            <Navbar />
            <main className=" flex flex-col min-h-screen justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                Welcome to community..
                <br />
                Please sign in for more details..
                <SignInButton mode="modal">
                    <button className="mt-5 border border-secondary bg-white px-4 py-1.5 text-base hover:text-white hover:bg-black">
                        <span>Sign in</span>
                    </button>
                </SignInButton>
            </main>
        </>
    );
}