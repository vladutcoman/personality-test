import { useContext, useReducer } from "react";
import PersonalityQuizzContext from "../../../pages/PersonalityQuizz/context";
import AnswerOption from "./Answer/Answer";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import {
  inInitialState,
  QuestionActionKind,
  questionReducer,
  ScoreHistoryKey,
} from "./reducer";

type QuestionCardProps = {
  submitFinalQuestion: (score: number) => void;
};

const FIRST_ANSWER = 0;
const SECOND_ANSWER = 1;
const THIRD_ANSWER = 2;
const FOURTH_ANSWER = 3;

const QuestionCard: React.FC<QuestionCardProps> = ({ submitFinalQuestion }) => {
  const [state, dispatch] = useReducer(questionReducer, inInitialState);
  const { selectedAnswerIdx, currentScore, scoreHistory, step } = state;
  const { questions } = useContext(PersonalityQuizzContext);

  const handleOnChange = (idx: number) => {
    dispatch({
      type: QuestionActionKind.SELECT,
      payload: { ...state, selectedAnswerIdx: idx },
    });
  };

  const handleNextQuestion = () => {
    const score = questions[step].answers[selectedAnswerIdx].score;
    if (step === questions.length - 1) {
      submitFinalQuestion(currentScore + score);
    }
    dispatch({
      type: QuestionActionKind.NEXT,
      payload: {
        ...state,
        currentScore: state.currentScore + score,
        scoreHistory: { ...state.scoreHistory, [step]: score },
      },
    });
  };

  const handlePreviousQuestion = () => {
    const score = scoreHistory[(step - 1) as ScoreHistoryKey];
    dispatch({
      type: QuestionActionKind.PREVIOUS,
      payload: {
        ...state,
        currentScore: state.currentScore - score,
        scoreHistory: { ...state.scoreHistory, [step]: 0 },
      },
    });
  };

  const isSelected = (idx: number) => {
    return selectedAnswerIdx === idx ? true : false;
  };

  if (questions.length === 0) {
    return <div>No questions found</div>;
  } else {
    return (
      <article>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          {questions[step].question}
        </h3>
        <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <AnswerOption
            onChange={() => handleOnChange(FIRST_ANSWER)}
            answerContent={questions[step].answers[FIRST_ANSWER]}
            selected={isSelected(FIRST_ANSWER)}
          />
          <AnswerOption
            onChange={() => handleOnChange(SECOND_ANSWER)}
            answerContent={questions[step].answers[SECOND_ANSWER]}
            selected={isSelected(SECOND_ANSWER)}
          />
          <AnswerOption
            onChange={() => handleOnChange(THIRD_ANSWER)}
            answerContent={questions[step].answers[THIRD_ANSWER]}
            selected={isSelected(THIRD_ANSWER)}
          />
          <AnswerOption
            onChange={() => handleOnChange(FOURTH_ANSWER)}
            answerContent={questions[step].answers[FOURTH_ANSWER]}
            selected={isSelected(FOURTH_ANSWER)}
          />
        </ul>
        <NavigationButtons
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          selectedAnswerIdx={selectedAnswerIdx}
          step={step}
        />
      </article>
    );
  }
};

export default QuestionCard;
