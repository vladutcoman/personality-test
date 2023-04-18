import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalityCard from "../../../../../components/PersonalityCard/PersonalityCard";
import { db } from "../../../../../db/db";
import { createQuizzResult } from "../../../../../service/service";
import { Personality } from "../../../../../types/types";

type ResultProps = {
  personality: Personality;
};

const Result: React.FC<ResultProps> = ({ personality }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const btnDisable = name === "";

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const onSubmit = () => {
    createQuizzResult(name, personality, navigate);
  };

  return (
    <section className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <PersonalityCard personality={personality} />
      <form className="mt-4" onSubmit={onSubmit}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          onChange={handleOnChange}
        />
        <button
          disabled={btnDisable}
          className={`bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l ${
            btnDisable ? "opacity-50 cursor-default" : "hover:bg-gray-400"
          }`}
        >
          Save result
        </button>
      </form>
    </section>
  );
};
export default Result;
