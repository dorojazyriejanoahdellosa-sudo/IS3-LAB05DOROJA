import QuestionComponent from "./QuestionComponent";

type Question = {
  qnum: number;
  question: string;
  options: string[];
  answer: string;
};

type QuestionPageComponentProps = {
  questions: Question[];
  results: (boolean | null)[];
  currentIndex: number;
  score: number;
  finished: boolean;
  onNext: (selectedAnswer: string) => void;
  onRestart: () => void;
};

function QuestionPageComponent({
  questions,
  results,
  currentIndex,
  score,
  finished,
  onNext,
  onRestart,
}: QuestionPageComponentProps) {
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCorrectly = results.filter((result) => result === true).length;

  if (finished) {
    return (
      <section className="score-card">
        <p className="eyebrow">IT'S A WRAPPED</p>
        <h1>Your Score!</h1>
        <div className="score-number">
          {score}/{questions.length}
        </div>
        <p>You have {answeredCorrectly} questions correctly. Nice Try!</p>
        <button className="back-button" onClick={onRestart}>
          Try Again
        </button>
        <button className="back-button" onClick={onRestart}>
          Back to Start
        </button>
      </section>
    );
  }

  return (
    <div className="question-page">
      <div className="header">
        <span>
          Question {currentIndex + 1}/{totalQuestions}
        </span>
      </div>
      <QuestionComponent currQuestion={currentQuestion} onNext={onNext} />
    </div>
  );
}

export default QuestionPageComponent;
