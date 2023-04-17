import { useEffect, useState } from "react";
import { db } from "../db/db";
import { PersonalityQuestions } from "../types/types";

const usePersonalityQuestions = () => {
  const [personalityQuestions, setPersonalityQuestions] =
    useState<PersonalityQuestions>({
      questions: [],
    });
  const [error, setError] = useState<boolean>(false);

  const fetchPersonalityQuestions = async () => {
    try {
      await db.read();
      const personalityQuestions = db.data?.personalityQuestions;
      if (personalityQuestions) {
        setPersonalityQuestions(personalityQuestions);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchPersonalityQuestions();
  }, []);

  return {
    personalityQuestions,
    error,
  };
};

export default usePersonalityQuestions;
