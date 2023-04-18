import PersonalityCard from "../../../components/PersonalityCard/PersonalityCard";
import { QuizzResult } from "../../../types/types";

type QuizzHistoryProps = {
  quizzResults: QuizzResult[];
};

const QuizzHistory: React.FC<QuizzHistoryProps> = ({ quizzResults }) => {
  return (
    <section className="h-2/3 overflow-y-auto shadow rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {quizzResults.map((result) => (
        <div
          key={Math.random()}
          className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white block max-w-sm p-6 bg-white border border-gray-200 rounded-lg"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Name: {result.name}
          </h2>
          <PersonalityCard personality={result.personality} />
        </div>
      ))}
    </section>
  );
};

export default QuizzHistory;
