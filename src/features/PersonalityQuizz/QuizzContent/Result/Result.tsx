import usePersonalityTypes from "../../../../hooks/usePersonalityTypes";

type ResultProps = {
  score: number;
};

const Result: React.FC<ResultProps> = ({ score }) => {
  const { personalityTypes, error } = usePersonalityTypes();

  return (
    <div>
      <h1>{score}</h1>
    </div>
  );
};

export default Result;
