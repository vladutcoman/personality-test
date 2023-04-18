export type Answer = {
  answer: string,
  score: number,
};

export type Question = {
  question: string,
  answers: Answer[],
};

export type PersonalityQuestions = {
  questions: Question[],
};

export enum PersonalityType {
  Introvert = 'Introvert',
  ModeratelyIntrovert = 'Moderately Introvert',
  ModeratelyExtrovert = 'Moderately Extrovert',
  Extrovert = 'Extrovert',
};

export type Personality = {
  description: string,
  type: PersonalityType,
};

export type PersonalityTypeIndex = 1 | 2 | 3 | 4;

export type PersonalityTypes = {
  [id in PersonalityTypeIndex]: Personality;
};

export type QuizzResult = {
  name: string,
  personality: Personality,
};

export type DBData = {
  personalityQuestions: PersonalityQuestions,
  personalityTypes: PersonalityTypes,
  results: QuizzResult[],
};


