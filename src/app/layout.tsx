import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import logo from "../../public/logo.png";



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
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href={logo.src} />
        </head>
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}