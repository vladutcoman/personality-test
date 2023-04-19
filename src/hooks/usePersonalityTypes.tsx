import { useEffect, useState } from "react";
import { db } from "../service/db/db";

import { PersonalityTypes } from "../types/types";

const usePersonalityTypes = () => {
  const [personalityTypes, setPersonalityTypes] =
    useState<PersonalityTypes | null>(null);
  const [error, setError] = useState<boolean>(false);

  const fetchPersonalityTypes = async () => {
    try {
      await db.read();
      const personalityTypes = db.data?.personalityTypes;
      if (personalityTypes) {
        setPersonalityTypes(personalityTypes);
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
    personalityTypes,
    error,
  };
};

export default usePersonalityTypes;
