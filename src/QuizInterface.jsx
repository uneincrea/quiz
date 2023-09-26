import React, { useState, useEffect } from "react";
import * as QuestionData from "./questionsData";

export const QuizInterface = ({ onBack }) => {
  const [selectedLevel, setSelectedLevel] = useState("1");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuestionsForLevel = (level) => {
    const dataKey = `TestData${level}`;
    return QuestionData[dataKey]?.questions || [];
  };

  useEffect(() => {
    const shuffleArray = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledQuestions(shuffleArray(fetchQuestionsForLevel(selectedLevel)));
    setCurrentQuestionIndex(0); 
  }, [selectedLevel]);

  const evaluateAnswer = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1));

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    setAnsweredQuestions(prev => [
      ...prev,
      {
        question: `問題${currentQuestionIndex + 1}: ${currentQuestion.question}`,
        userAnswer: userAnswer,
        isCorrect: userAnswer === currentQuestion.answer,
        explanation: currentQuestion.explanation
      }
    ]);

    if (userAnswer === currentQuestion.answer) {
      setCorrectAnswers(prev => prev + 1);
    }

    setUserAnswer("");
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setIsLoading(false); 
  };

  return (
    <div className="App">
      <header className="App-header">日本語クイズ</header>
      <div className="level-selection">
        {Array.from({ length: 10 }).map((_, idx) => (
          <button key={idx} onClick={() => setSelectedLevel(`${idx + 1}`)}>
            {`Level${idx + 1}`}
          </button>
        ))}
      </div>
      <h2>{`Level${selectedLevel}`}</h2>
      
      <div className="quiz-section">
        {isLoading ? (
          <p>Loading...</p>
        ) : currentQuestionIndex < shuffledQuestions.length ? (
          <>
            <p>問題{currentQuestionIndex + 1}: {shuffledQuestions[currentQuestionIndex].question}</p>
            {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    onChange={(e) => setUserAnswer(e.target.value)}
                  />
                  {option}
                </label>
              </div>
            ))}
            <button onClick={evaluateAnswer} disabled={isLoading || !userAnswer}>次へ</button>
          </>
        ) : (
          <>
            <p>
              {shuffledQuestions.length}問中、{correctAnswers}問正解です。
            </p>
            {answeredQuestions.map((item, index) => (
              <div key={index}>
                <p>{item.question}</p>
                <p>あなたの答え: {item.userAnswer}</p>
                <p>{item.isCorrect ? "正解" : "不正解"}</p>
                <p>解説: {item.explanation}</p>
              </div>
            ))}
            <button onClick={onBack}>TOPに戻る</button>
          </>
        )}
      </div>
    </div>
  );
};
