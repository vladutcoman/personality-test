import QuizzLink from "./components/QuizzLink/QuizzLink";

function App() {
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-6">
      <h2 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Welcome to Vladut's personality test.
        </span>{" "}
        Have fun!
      </h2>
      <QuizzLink route="quizz" text="Start Quizz" />
      <QuizzLink route="results" text="Quizz Results History" />
    </main>
  );
}

export default App;
