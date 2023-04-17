import { useState } from "react";
import Question from "../Question/Question";
import Result from "../Result/Result";

type QuizzContentProps = {
  totalQuestions: number;
};

const QuizzContent: React.FC<QuizzContentProps> = ({ totalQuestions }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const addScore = (scoreToAdd: number) => {
    setScore((prevScore) => prevScore + scoreToAdd);
  };

  return (
    <section>
      {step < totalQuestions ? (
        <Question
          proceedNextStep={onNextStep}
          addScore={addScore}
          index={step}
        />
      ) : (
        <Result score={score} />
      )}
    </section>
  );
};

export default QuizzContent;
