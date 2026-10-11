type OptionComponentProps = {
  option: string;
  selected: boolean;
  questionNumber: number;
  onSelect: (option: string) => void;
};

function OptionComponent({
  option,
  selected,
  questionNumber,
  onSelect,
}: OptionComponentProps) {
  return (
    <label className={`option ${selected ? "selected" : ""}`}>
      <input
        type="radio"
        name={`question-${questionNumber}`}
        value={option}
        checked={selected}
        onChange={(event) => onSelect(event.target.value)}
      />
      <span className="radio-circle" />
      <span>{option}</span>
    </label>
  );
}

export default OptionComponent;