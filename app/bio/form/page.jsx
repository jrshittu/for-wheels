"use client";

import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const Page = () => {
    const [ submitting, setSubmitting ] = useState(false);
    const [ post, setPost ] = useState([
          {id: 1,
            question: 'How satisfied are you with our service?',
            type: 'rating',
            response: null,
          },
          {
            id: 2,
            question: 'What can we improve to serve you better?',
            type: 'text',
            response: '',
          },
          {
            id: 3,
            question: 'Would you recommend our service to others?',
            type: 'rating',
            response: null,
          },
          {
            id: 4,
            question: 'How often do you use our service?',
            type: 'multiple-choice',
            response: '',
            choices: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'],
          }
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const createQuestion = async (e) => {

    }

  return (
    <Form 
        type="Form"
        post={post}
        setPost= {setPost}
        submitting={submitting}
        handleSubmit = {createQuestion}
    />
  )
}

export default Page;
