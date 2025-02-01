import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import logo from "../../../public/logo.png";
import { Navbar } from "@/components/navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Daily Grind | By Kaviru Hapuarachchi",
    description: "​Shape Your Future, Daily: Engage in Focus Sessions, Learn from Experts, and More. Tools to Help You Focus on What Matters Most to You.",
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <body>
            <Navbar />
            <main className="flex flex-col min-h-screen items-center px-4 sm:px-6 lg:px-8 max-w-4xl w-full ">
                {children}
            </main>
        </body>

    )
}