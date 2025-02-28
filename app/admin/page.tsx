"use client";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { QuizContext } from "../context/QuizContext";
import Link from "next/link";

interface AdminLayout {
  question: string;
  answer: string;
}

const AdminLayout: React.FC = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("QuizContext must be used within a QuizProvider");
  }

  const { setQuestions } = context;

  const { register, handleSubmit } = useForm<AdminLayout>();

  const onSubmit: SubmitHandler<AdminLayout> = (data: AdminLayout) => {
    setQuestions((prev: AdminLayout[]) => [
      ...prev,
      { question: data.question, answer: data.answer },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="question">Question:</label>
          <input type="text" id="question" {...register("question")} />
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input type="text" id="answer" {...register("answer")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link href="/run-quiz"> go here </Link>
    </>
  );
};

export default AdminLayout;
