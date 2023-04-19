import { useState } from "react";
import QuestionCard from "./QuestionCard/QuestionCard";
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
        <QuestionCard submitFinalQuestion={submitFinalQuestion} />
      ) : (
        <ResultCard score={Math.round(finalScore / 5)} />
      )}
    </section>
  );
};

export default QuizzContent;
