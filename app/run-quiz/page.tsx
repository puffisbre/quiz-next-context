'use client'

import { QuizContext } from "../context/QuizContext";
import React, { useContext, useEffect } from "react";


export default function RunQuiz() {
  const context = useContext(QuizContext);
    const questions = context?.questions ?? [];
  //  const setQuestions = context?.setQuestions ?? (() => {});
  useEffect(() => {
    console.log(questions);
  }, [questions]);
  return (
  <>
  <div>
        {questions.map((q, index) => (
          <div key={index}>
            <p>Question: {q.question}</p>
            <p>Answer: {q.answer}</p>
          </div>
        ))}
      </div>
  </>);
}
