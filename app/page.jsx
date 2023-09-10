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
      
        <h1 className='head_text text-center green_gradient'>
            Discover ParkEase
        <br className='max-md:hidden'/>
        <p className='orange_gradient'>Streamlining Parking Solutions</p>
        </h1>

        <p className='desc text-center'>
        ParkEase is an innovative app designed to
            transform your parking experience. With cutting-edge features, ParkEase
            redefines convenience and efficiency in car parking management. Kindly attend to questionnaire below to help us improve our services.
        </p>
        <Link href="/bio/form" className='black_btn mt-2'>
                        Open Questionnaire
        </Link>

  </section>
  )
}

export default Page
