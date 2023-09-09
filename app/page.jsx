import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">

        <div className='sm:flex hidden'>
            <Image 
                src="/assets/images/park.png"
                width={220}
                height={100}
                className='rounded_full'
                alt="profile"
            />
        </div>
      
        <h1 className='head_text text-center green_gradient'>
            Discover ParkEase
        <br className='max-md:hidden'/>
        </h1>

        <h1 className='head_text text-center orange_gradient'>Streamlining Parking Solutions</h1>

        <p className='desc text-center'>
        ParkEase is an innovative and user-centric application designed to
            transform the parking experience. With cutting-edge features, ParkEase
            redefines convenience and efficiency in car parking management.
        </p>

  </section>
  )
}

export default Page
