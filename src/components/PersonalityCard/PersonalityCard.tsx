import { Personality } from "../../types/types";

type PersonalityCardProps = {
  personality: Personality;
};

const PersonalityCard = ({ personality }: PersonalityCardProps) => {
  return (
    <>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`Result: ${personality.type}`}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {personality.description}
      </p>
    </>
  );
};

export default PersonalityCard;
