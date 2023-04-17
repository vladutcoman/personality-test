import { Answer } from "../../../../../types/types";

type AnswerProps = {
  answerContent: Answer;
  selected: boolean;
  onChange: () => void;
};

const AnswerOption: React.FC<AnswerProps> = ({
  answerContent,
  selected,
  onChange,
}) => {
  return (
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input
          checked={selected}
          onChange={onChange}
          id={`li-answer-${answerContent.score}`}
          type="radio"
          value=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor={`li-answer-${answerContent.score}`}
          className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {answerContent.answer}
        </label>
      </div>
    </li>
  );
};

export default AnswerOption;
