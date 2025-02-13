"use client";

import { QuizContext } from "../context/QuizContext";
import React, { useContext, useState } from "react";

export default function RunQuiz() {
  const [showQuestion, setShowQuestion] = useState(0);
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("QuizContext must be used within a QuizProvider");
  }

  const { questions } = context;

  function nextQuestion() {
    setShowQuestion((prev) => prev + 1);
  }
  return (
    <>
      <div>
        <div>
          Question:{" "}
          {showQuestion >= questions.length ? (
            <p> No more questions</p>
          ) : (
            <p>{questions[showQuestion].question}</p>
          )}
          <button onClick={nextQuestion}></button>
          <input />
        </div>
      </div>
    </>
  );
}
