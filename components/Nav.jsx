"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Nav = () => {
    
    const { data: session } = useSession();

    const [ providers, setProviders ] = useState(null);
    const [ toggleDropDown, setToggleDropDown ] = useState(false);
    
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
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/register-car" className='black_btn'>
                        My Dashboard
                    </Link>
                    <Link href="/find-car" className='black_btn'>
                        Find My Car
                    </Link>
                    <Link href="/data" className='black_btn'>
                        Data and Analytics
                    </Link>
            
                    <button type="button" onClick={signOut} className='outline_btn'> 
                        Sign Out
                    </button>
                    <Link href="/profile">
                        <Image 
                            src={session?.user.image}
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

      {/* Mobile Nav */}
      <div className='sm:hidden flex relative'>
        {
            session?.user ? (
                <div className='flex'>
                    <Image 
                        src={session?.user.image}
                        width={37}
                        height={37}
                        className='rounded_full'
                        alt="profile"
                        onClick={ () => setToggleDropDown(prev => !prev)}
                    />
                    {
                        toggleDropDown && (
                            <div className='dropdown'>
                                <Link 
                                    href='/bio'
                                    className='dropdown_link'
                                    onClick={ () => setToggleDropDown(false)}
                                >
                                    My Dashboard
                                </Link>
                                <Link 
                                    href='/track'
                                    className='dropdown_link'
                                    onClick={ () => setToggleDropDown(false)}
                                >
                                    Find My Car
                                </Link>
                                <Link 
                                    href='/track'
                                    className='dropdown_link'
                                    onClick={ () => setToggleDropDown(false)}
                                >
                                    Data and Analytics
                                </Link>
                                <button
                                    type='button'
                                    onClick={ () => {
                                        setToggleDropDown(false)
                                        signOut();
                                    }}
                                    className='mt-5 w-full black_btn'
                                >
                                    Sign Out
                                </button>
                            </div>
                        )
                    }
                </div>
            ): (
                <>
                    {
                        providers && 
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
