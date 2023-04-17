type NavigationButtonsProps = {
  onNext: () => void;
  onPrevious: () => void;
  selectedAnswerIdx: number;
  step: number;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onPrevious,
  selectedAnswerIdx,
  step,
}) => {
  return (
    <div className="inline-flex mt-5">
      <button
        onClick={onPrevious}
        disabled={step === 0}
        className={`bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l ${
          step === 0 ? "opacity-50 cursor-default" : "hover:bg-gray-400"
        }`}
      >
        Prev
      </button>
      <button
        onClick={onNext}
        disabled={selectedAnswerIdx === -1}
        className={`bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r ${
          selectedAnswerIdx === -1
            ? "opacity-50 cursor-default"
            : "hover:bg-gray-400"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
