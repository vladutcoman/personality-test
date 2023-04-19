import { Personality } from "../types/types";
import { db } from "./db/db";

export const createQuizzResult = async (name: string, personality: Personality): Promise<boolean> => {
  return db.write()
    .then(() => {
      db.data?.results.push({
        name,
        personality,
      });
      return true;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

