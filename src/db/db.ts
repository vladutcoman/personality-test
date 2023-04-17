import { Low, Memory } from 'lowdb';
import { DBData } from '../types/types';
import { personalityData, personalityTestData } from './staticData';

export const db = new Low<DBData>(new Memory());

db.adapter.write({
  personalityTest: personalityTestData,
  personalities: personalityData,
});
