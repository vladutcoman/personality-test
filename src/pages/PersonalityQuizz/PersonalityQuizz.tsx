import PersonalityQuizzContext from "./context";
import withErrorCheck from "../../hoc/withErrorCheck";
import usePersonalityQuestions from "../../hooks/usePersonalityQuestions";
import QuizzContent from "../../features/QuizzContent/QuizzContent";
import withLayout from "../../hoc/withLayout";

const PersonalityQuizz: React.FC = () => {
  const { personalityQuestions, error } = usePersonalityQuestions();

  return (
    <>
      <PersonalityQuizzContext.Provider value={personalityQuestions}>
        {withErrorCheck(QuizzContent)({
          error,
          resource: "questions",
          totalQuestions: personalityQuestions.questions.length,
        })}
      </PersonalityQuizzContext.Provider>
    </>
  );
};

export default withLayout(PersonalityQuizz);
