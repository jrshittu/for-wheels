import React, { useState } from 'react';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Define your questions and default placeholders as an array of objects
  const questions = [
    {
      question: 'How satisfied are you with our services?',
      placeholder: 'Rate your satisfaction (1-5)',
    },
    {
      question: 'What can we improve to serve you better?',
      placeholder: 'Provide your suggestions here',
    },
    {
      question: 'What do you enjoy most from our services?',
      placeholder: 'Share your favorite aspects',
    },
    {
      question: 'Which of our services is the hardest to use?',
      placeholder: 'Tell us the service you find challenging',
    },
    // Add more questions here
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

      // Clear the input value when moving to the next question
      setPost({
        ...post,
        question: '', // Clear the input value
      });
    } else {
      // If there are no more questions, you can submit the feedback
      handleSubmit();
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="orange_gradient">{type}</span>
      </h1>
      <p className="desc text-left max-w-md">
        Take your time to tell us how you feel about our services.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-2-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {questions[currentQuestion].question}
          </span>
          <textarea
            value={post.question}
            onChange={(e) =>
              setPost({
                ...post,
                question: e.target.value,
              })
            }
            placeholder={questions[currentQuestion].placeholder}
            required
            className="form_textarea"
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
