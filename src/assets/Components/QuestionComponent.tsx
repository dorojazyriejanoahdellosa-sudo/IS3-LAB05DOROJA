import { useState } from "react";
import OptionComponent from "./OptionComponent";

type Question = {
  qnum: number;
  question: string;
  options: string[];
  answer: string;
};

type QuestionComponentProps = {
  currQuestion: Question;
  onNext: (selectedAnswer: string) => void;
};

function QuestionComponent({ currQuestion, onNext }: QuestionComponentProps) {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleNext = () => {
    if (!selectedFruit) return;
    onNext(selectedFruit);
    setSelectedFruit("");
  };

  return (
    <div className="question-container">
      <h1>Question {currQuestion.qnum}</h1>
      <p className="question-text">{currQuestion.question}</p>

      <div className="options-list">
        {currQuestion.options.map((option, index) => (
          <OptionComponent
            key={index}
            option={option}
            selected={selectedFruit === option}
            questionNumber={currQuestion.qnum}
            onSelect={setSelectedFruit}
          />
        ))}
      </div>

      <button
        className="next-button"
        onClick={handleNext}
        disabled={!selectedFruit}
      >
        Next
      </button>
    </div>
  );
}

export default QuestionComponent;
