import React from 'react';
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='orange_gradient'>{type}</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Take your time to tell us how you feel about our services.
      </p>

    </section>
  )
}

export default Form
