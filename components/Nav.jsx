"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {
    const isUserLoggedIn = true;

    const [ providers, setProviders ] = useState(null);
    
    useEffect(() => {
        const setUpProviders = async () => {
    
          const response = await getProviders();
    
          setProviders(response);
    
        }
        setUpProviders();
      }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'> 
            <Image 
                src="/assets/images/logo.png"
                alt='Car Parking Solution'
                width={70}
                height={65}
                className='object-contain'
            />
            <p className='logo_text'>
                ParkEase
            </p>
        </Link>

        {/* Desktop Nav */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/register-car" className='black_btn'>
                        Register Your Car
                    </Link>
                    <button type="button" onClick={signOut} className='outline_btn'> 
                        Sign Out
                    </button>
                    <Link href="/profile">
                        <Image 
                            src="/assets/images/logo.png"
                            width={37}
                            height={37}
                            className='rounded_full'
                            alt="profile"
                        />
                    </Link>
                </div>
            ) : (
                <>
                    { providers && 
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={providers.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              )) 
            }
          </>
        )
      }
      </div>
      
    </nav>
  )
}

export default Nav
