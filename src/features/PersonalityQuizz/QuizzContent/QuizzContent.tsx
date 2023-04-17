import { useState } from "react";
import Question from "./Question/Question";
import Result from "./Result/Result";

type QuizzContentProps = {
  totalQuestions: number;
};

const QuizzContent: React.FC<QuizzContentProps> = ({ totalQuestions }) => {
  const [showQuestions, setShowQuestions] = useState(true);
  const [finalScore, setFinalScore] = useState(0);

  const submitFinalQuestion = (scoreToAdd: number) => {
    setShowQuestions(false);
    setFinalScore(scoreToAdd);
  };

  return (
    <section>
      {showQuestions ? (
        <Question submitFinalQuestion={submitFinalQuestion} />
      ) : (
        <Result score={finalScore} />
      )}
    </section>
  );
};

export default QuizzContent;
