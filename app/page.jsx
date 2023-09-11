import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">

        <div className='sm:flex hidden'>
            <Image 
                src="/assets/images/park.png"
                width={280}
                height={80}
                className='rounded_full'
                alt="profile"
            />
        </div>

        <h1 className='head_text text-center green_gradient mb-2'>
            Discover ParkEase
        </h1>

        <div className='flex flex-column mt-3'>
            <Link href="/bio/form" className='black_btn mx-2'>
                            Open Questionnaire
            </Link>
            <Link href="/bio" className='black_btn mx-2'>
                            Scan QR Code
            </Link>
        </div>

        <h1 className='orange_gradient head_text text-center mt-2'>Streamlining Parking Solutions</h1>
        
        <p className='desc text-center'>
            ParkEase is an innovative app designed to transform your parking experience. With cutting-edge features, ParkEase redefines convenience and efficiency in car parking management. Kindly attend to questionnaire below to help us improve our services.
        </p>

  </section>
  )
}

export default Page
