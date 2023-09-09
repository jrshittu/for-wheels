import React from 'react';

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden'/>
    </h1>

    <h1 className='head_text text-center orange_gradient'>AI-Powered Prompts</h1>

    <p className='desc text-center'>
      Promptus is an open source AI prompting tool for modern world to discover, create and share creative prompts.
    </p>

    <Biometric />
  </section>
  )
}

export default page
