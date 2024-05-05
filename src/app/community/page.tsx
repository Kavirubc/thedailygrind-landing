"use client";
import { Navbar } from "@/components/navbar";
import logo from "../../public/logo.png";
import { Herosecnew } from "@/components/herosecnew";

import { useUser } from "@clerk/nextjs";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { User } from "lucide-react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";



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

                    <button className="px-5 py-1 border items-center border-black flex flex-row gap-x-1 hover:border-violet-600 hover:text-white hover:bg-purple-pink-gradient mt-5 text-center">
                        <Link href='/community/join'>
                            <div className=' px-4 py-2 md:py-0 flex flex-row' >
                                Waitlist  <IconArrowUpRight height={13} />
                            </div>  
                        </Link>
                    </button>
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
                <div className="flex flex-row gap-x-5">
                    <SignInButton mode="modal" fallbackRedirectUrl="/community">
                        <button className="mt-5 border border-secondary bg-white px-4 py-1.5 text-base hover:text-white hover:bg-black">
                            <span>Sign in</span>
                        </button>
                    </SignInButton>
                    <button className="px-5 py-1 border items-center border-black flex flex-row gap-x-1 hover:border-violet-600 hover:text-white hover:bg-purple-pink-gradient mt-5 text-center">
                        <Link href='/community/join'>
                            <div className=' px-4 py-2 md:py-0 flex flex-row' >
                                Waitlist  <IconArrowUpRight height={13} />
                            </div>
                        </Link>
                    </button>
                </div>
            </main>
        </>
    );
}