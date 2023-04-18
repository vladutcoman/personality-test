import PersonalityQuizzContext from "./context";
import withErrorCheck from "../../hoc/withErrorCheck";
import usePersonalityQuestions from "../../hooks/usePersonalityQuestions";
import QuizzContent from "./QuizzContent/QuizzContent";

type PersonalityQuizzProps = {
  stopTest: () => void;
};

const PersonalityQuizz: React.FC<PersonalityQuizzProps> = ({ stopTest }) => {
  const { personalityQuestions, error } = usePersonalityQuestions();

  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <button
        onClick={stopTest}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Stop test
      </button>
      <PersonalityQuizzContext.Provider value={personalityQuestions}>
        {withErrorCheck(QuizzContent)({
          error,
          resource: "questions",
          totalQuestions: personalityQuestions.questions.length,
        })}
      </PersonalityQuizzContext.Provider>
    </section>
  );
};

export default PersonalityQuizz;
