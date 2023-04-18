import { useEffect, useState } from "react";
import { db } from "../db/db";
import { QuizzResult } from "../types/types";

const useQuizzResults = () => {
  const [results, setResults] = useState<QuizzResult[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchPersonalityTypes = async () => {
    try {
      await db.read();
      const quizzResults = db.data?.results;
      if (quizzResults) {
        setResults(quizzResults);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchPersonalityTypes();
  }, []);

  return {
    results,
    error,
  };
};

export default useQuizzResults;
