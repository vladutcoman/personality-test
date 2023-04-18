import withErrorCheck from "../../hoc/withErrorCheck";
import withLayout from "../../hoc/withLayout";
import useQuizzResults from "../../hooks/useQuizzResults";
import QuizzHistory from "../../features/QuizzHistory/QuizzHistory";

const QuizzHistoryCard = () => {
  const { results, error } = useQuizzResults();

  return results.length > 0 ? (
    withErrorCheck(QuizzHistory)({
      error,
      resource: "quizz results",
      quizzResults: results,
    })
  ) : (
    <section>No quizz history</section>
  );
};

export default withLayout(QuizzHistoryCard);
