import { useState } from "react";
import Question from "./Question/Question";
import ResultCard from "./ResultCard/ResultCard";

const QuizzContent: React.FC = () => {
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
        <ResultCard score={Math.round(finalScore / 5)} />
      )}
    </section>
  );
};

export default QuizzContent;
