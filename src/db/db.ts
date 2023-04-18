import { Low, Memory } from 'lowdb';
import { DBData } from '../types/types';
import { personalityTypesData, personalityQuestionsData } from './staticData';

export const db = new Low<DBData>(new Memory());

db.adapter.write({
  personalityQuestions: personalityQuestionsData,
  personalityTypes: personalityTypesData,
  results: [],
});
