"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import BiometricAuthButton from '@components/Biometric';

const Page = () => {
    const { data: session } = useSession();

    const [ providers, setProviders ] = useState(null);
    
    useEffect(() => {
        const setUpProviders = async () => {
    
          const response = await getProviders();
    
          setProviders(response);
    
        }
        setUpProviders();
      }, []);


  return (
    <section className="w-full flex-center flex-col">
      <div className='sm:flex'>
        {
          session?.user ? (
            <div className='rounded-full'>
              <Image 
                src={session?.user.image}
                width={150}
                height={130}
                className='rounded_full'
                alt="profile"
                onClick={() => {}}
              />
            </div>
          ) : (
            <>
              {
                providers && 
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name} // Change from providers.name to provider.name
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
      <h1 className='mt-2 font-extrabold text-lg text-center orange_gradient mb-2'>
            {session?.user.name}
        </h1>

        <p className='desc text-center'>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae animi ad necessitatibus iure atque minus nam maxime et eum voluptatem. Unde beatae ipsa molestiae itaque ullam doloribus minus, nulla aspernatur!
        </p>

        <div className='flex flex-column mt-7'>
            <Link href="/bio/form" className='black_btn mx-2'>
                            Open Questionnaire
            </Link>
            <Link href="/bio" className='black_btn mx-2'>
                            Scan QR Code
            </Link>
           
        </div>

        <BiometricAuthButton />
        <Link className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/track">
          Check Parking Spaces
        </Link>

    </section>
  )
}

export default Page;
