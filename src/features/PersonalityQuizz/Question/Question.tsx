import { useContext, useState } from "react";
import PersonalityQuizzContext from "../context";
import AnswerOption from "./Answer/Answer";

type QuestionProps = {
  index: number;
  addScore: (score: number) => void;
  proceedNextStep: () => void;
};

const Question: React.FC<QuestionProps> = ({
  proceedNextStep,
  index,
  addScore,
}) => {
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number>(-1);
  const { questions } = useContext(PersonalityQuizzContext);

  const onSelect = (idx: number) => {
    setSelectedAnswerIdx(idx);
  };

  const onNext = () => {
    proceedNextStep();
    setSelectedAnswerIdx(-1);
    addScore(questions[index].answers[selectedAnswerIdx].score);
  };

  return (
    <article>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        {questions[index].question}
      </h3>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <AnswerOption
          onSelect={() => onSelect(0)}
          answerContent={questions[index].answers[0]}
          selected={selectedAnswerIdx === 0}
        />
        <AnswerOption
          onSelect={() => onSelect(1)}
          answerContent={questions[index].answers[1]}
          selected={selectedAnswerIdx === 1}
        />
        <AnswerOption
          onSelect={() => onSelect(2)}
          answerContent={questions[index].answers[2]}
          selected={selectedAnswerIdx === 2}
        />
        <AnswerOption
          onSelect={() => onSelect(3)}
          answerContent={questions[index].answers[3]}
          selected={selectedAnswerIdx === 3}
        />
      </ul>
      <div className="inline-flex mt-5">
        <button
          disabled={index === 0}
          className={`bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l ${
            index === 0 ? "opacity-50 cursor-default" : "hover:bg-gray-400"
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
    </article>
  );
};

export default Question;
