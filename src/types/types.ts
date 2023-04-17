export type Answer = {
  answer: string,
  score: number,
};

export type Question = {
  question: string,
  answers: Answer[],
};

export type PersonalityTest = {
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

export type DBData = {
  personalityTest: PersonalityTest,
  personalities: {[id: number]: Personality},
};
