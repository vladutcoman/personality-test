import React, { useState } from "react";
import PersonalityQuizz from "./features/PersonalityQuizz/PersonalityQuizz";

function App() {
  const [startTest, setStartTest] = useState(false);

  const onStartTest = () => {
    setStartTest(true);
  };

  const onStopTest = () => {
    setStartTest(false);
  };

  return (
    <main className="flex justify-center items-center h-screen">
      {startTest ? (
        <PersonalityQuizz stopTest={onStopTest} />
      ) : (
        <button
          onClick={onStartTest}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-12 w-32"
        >
          Start test
        </button>
      )}
    </main>
  );
}

export default App;
