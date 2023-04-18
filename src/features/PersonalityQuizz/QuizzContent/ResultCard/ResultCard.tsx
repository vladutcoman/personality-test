import withErrorCheck from "../../../../hoc/withErrorCheck";
import usePersonalityTypes from "../../../../hooks/usePersonalityTypes";
import { PersonalityType, PersonalityTypeIndex } from "../../../../types/types";
import Result from "./Result/Result";

type ResultProps = {
  score: number;
};

const ResultCard: React.FC<ResultProps> = ({ score }) => {
  const { personalityTypes, error } = usePersonalityTypes();

  const personality =
    personalityTypes !== null
      ? personalityTypes[score as PersonalityTypeIndex]
      : {
          description: "string",
          type: PersonalityType.Extrovert,
        };

  return withErrorCheck(Result)({
    error,
    resource: "personality types",
    personality,
  });
};

export default ResultCard;
