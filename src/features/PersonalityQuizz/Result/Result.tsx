import usePersonalityTypes from "../../../hooks/usePersonalityTypes";

type ResultProps = {
  score: number;
};

const Result: React.FC<ResultProps> = ({ score }) => {
  const { personalityTypes, error } = usePersonalityTypes();
  console.log({ score, personalityTypes });

  return (
    <div>
      <h1>Result</h1>
    </div>
  );
};

export default Result;
