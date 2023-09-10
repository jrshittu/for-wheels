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

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-2-2xl 
        flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Are satisfied are you with our services?
          </span>
          <textarea 
            value={post.question}
            onChange={(e) => setPost({
              ...post, question: e.target.value
            })}
            placeholder='Write here'
            required
            className='form_textarea'
          />
        </label>


      </form>

    </section>
  )
}

export default Form
