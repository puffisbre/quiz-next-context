'use client'
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AdminLayout {
    question: string;
    answer: string;
}

const AdminLayout: React.FC = () => {
const [questions, setQuestions] = useState<AdminLayout[]>([]);

const { register, handleSubmit, formState: { errors } } = useForm<AdminLayout>();

  const onSubmit: SubmitHandler<AdminLayout> = (data: AdminLayout) => {
    setQuestions((prev) => [...prev, { question: data.question, answer: data.answer}]);
  };
  
  useEffect(
    () => {
      console.log(questions)
    },
    [questions]
  )

  return (
    <>
    <form onSubmit = {handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          {...register('question')}
        />
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
        <input
          type="text"
          id="answer"
          {...register('answer')}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    
    </>
  );
};

export default AdminLayout;