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
            <main className=" mt-20 flex flex-col items-center align-middle content-center justify-center text-black">
                

                Welcome to community..

                <div>
                        <SignedIn />
                        <SignedOut />
                </div>
            </main>
            </>
        );

    }
    return (
        <SignInButton mode="modal">
            <button className="rounded-md border border-secondary bg-transparent px-4 py-1.5 text-base">
                <span>Sign in</span>
            </button>
        </SignInButton>
    );
}