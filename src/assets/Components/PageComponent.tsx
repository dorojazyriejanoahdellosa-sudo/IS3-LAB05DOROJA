import { useState } from "react";
import QuestionPageComponent from "./QuestionPageComponent";
import "../../App.css";


type Question = {
  qnum: number;
  question: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    qnum: 1,
    question: "Which planet in our solar system currently holds the record for having the most confirmed moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
  {
    qnum: 2,
    question: "What color is the blood of an octopus?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Blue",
  },
  {
    qnum: 3,
    question: "Who was the first President of the United States?",
    options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
    answer: "George Washington",
  },
  {
    qnum: 4,
    question: "What is the chemical formula for pure water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: "H2O",
  },
  {
    qnum: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
];

function PageComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null),
  );
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleNext = (selectedAnswer: string) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    setResults((previous) => {
      const updated = [...previous];
      updated[currentIndex] = isCorrect;
      return updated;
    });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((previous) => previous + 1);
    } else {
      setFinished(true);
    }
  };

  const startQuiz = () => {
    setStarted(true);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setResults(Array(questions.length).fill(null));
    setStarted(false);
    setFinished(false);
  };

  const score = results.filter((result) => result === true).length;

  if (!started) {
    return (
      <main className="page start-page">
        <section className="start-card">
          <p className="eyebrow">Welcome to the Quiz App!</p>
          <h1>Are You Ready?</h1>
          <p>Take a quick 5-question quiz and see your score!</p>
          <button className="start-button" onClick={startQuiz}>
            Start Quiz
          </button>
        </section>
      </main>
    );
  }

  if (finished) {
    return (
      <main className="page">
        <section className="quiz-shell">
          <QuestionPageComponent
            questions={questions}
            results={results}
            currentIndex={currentIndex}
            score={score}
            finished={true}
            onNext={handleNext}
            onRestart={restartQuiz}
          />
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="quiz-shell">
        <QuestionPageComponent
          questions={questions}
          results={results}
          currentIndex={currentIndex}
          score={score}
          finished={false}
          onNext={handleNext}
          onRestart={restartQuiz}
        />
      </section>
    </main>
  );
}

export default PageComponent;
