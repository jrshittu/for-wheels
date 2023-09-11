"use client";

import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const Page = () => {
    const [ submitting, setSubmitting ] = useState(false);
    const [ post, setPost ] = useState([]);

    const createQuestion = async (e) => {
      e.preventDefault();
      setSubmitting(true);

      try{
        const response = await fetch('/api/question/new', {
          method: 'POST',
          body: JSON.stringify({
            post: post.question,
            userId: session?.user.id,
          })
        })

        if (response.ok){
          router.push('/dashboard');
        }

      } catch (error){
        console.log("error");
      } finally{
        setSubmitting(false);
      }
    }

  return (
    <Form 
        type="Questionnaire"
        post={post}
        setPost= {setPost}
        submitting={submitting}
        handleSubmit = {createQuestion}
    />
  )
}

export default Page;
