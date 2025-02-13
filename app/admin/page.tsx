'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  question: string;
  answer: string;
}

const AdminLayout: React.FC = () => {


  const {register,handleSubmit,formState: { errors },} = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
  );
};

export default AdminLayout;