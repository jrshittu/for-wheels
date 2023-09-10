"use client";

import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const Page = () => {
    const [ submitting, setSubmitting ] = useState(false);
    const [ post, setPost ] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const createQuestion = async (e) => {

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
