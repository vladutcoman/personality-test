import { createContext } from "react";
import { PersonalityQuestions } from "../../types/types";

const defaultValues: PersonalityQuestions = {
  questions: [],
};

const PersonalityQuizzContext =
  createContext<PersonalityQuestions>(defaultValues);

export default PersonalityQuizzContext;
