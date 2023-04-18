import { NavigateFunction } from "react-router-dom";
import { db } from "../db/db";
import { Personality } from "../types/types";

export const createQuizzResult = (name: string, personality: Personality, navigate: NavigateFunction) => {
  db.write()
    .then(() => {
      db.data?.results.push({
        name,
        personality,
      });
      navigate("/");
    })
    .catch((error) => {
      window.alert("Could not save the data");
      console.error(error);
    });
}

