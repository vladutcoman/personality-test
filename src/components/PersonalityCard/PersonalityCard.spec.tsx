import { render } from "@testing-library/react";
import { PersonalityType } from "../../types/types";
import PersonalityCard from "./PersonalityCard";

const personality = {
  type: PersonalityType.Extrovert,
  description: "Description for Type A",
};

describe("PersonalityCard", () => {
  test("renders personality type and description", () => {
    const { getByText } = render(<PersonalityCard personality={personality} />);

    expect(getByText(`Result: ${personality.type}`)).toBeInTheDocument();
    expect(getByText(personality.description)).toBeInTheDocument();
  });
});
