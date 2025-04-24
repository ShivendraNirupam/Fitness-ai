"use client"
import { SignInButton, SignUp, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'
import { Dumbbell, HomeIcon, UserIcon } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const { isSignedIn }= useUser();
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3'>
        
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className='flex items-center gap-2 ml-3'>
            <div className="p-1 bg-primary/10 rounded">
              <Dumbbell className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xl italic font-mono">
              Nirupam<span className="text-primary">Geek</span>.ai
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-5 mr-4">
            {isSignedIn ? (
              <>
                <Link href="/" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                  <HomeIcon size={16} />
                  <span className="font-mono">Home</span>
                </Link>

                <Link href="/generate-program" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                  <Dumbbell size={16} />
                  <span className="font-mono">Generate</span>
                </Link>

                <Link href="/profile" className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
                  <UserIcon size={16} />
                  <span className="font-mono">Profile</span>
                </Link>
                <Button
                  asChild
                  variant="outline"
                  className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10">
                  <Link href="/generate=program" >Get Started</Link>
                </Button>

                <UserButton />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10">
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button variant={"secondary"}
                  className="bg-cyan-500 text-primary-foreground hover:text-white hover:bg-primary/10">
                    Sign Up
                  </Button>
                  </SignUpButton>
              </>
            )}
          </nav>
        </div>

    </header>
  )
}

export default Navbar
