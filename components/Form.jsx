import React, { useState } from 'react';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Define your questions as an array
  const questions = [
    'How satisfied are you with our services?',
    'What can we improve to serve you better?',
    'What do enjoy most from our services?',
    'Which of our service is the hardest to use?'
    // Add more questions here
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
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
            {questions[currentQuestion]}
          </span>
          <textarea
            value={post.question}
            onChange={(e) =>
              setPost({
                ...post,
                question: e.target.value,
              })
            }
            placeholder="Write here"
            required
            className="form_textarea"
          />
        </label>

        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </form>
    </section>
  );
};

export default Form;
