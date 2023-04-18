import { render, screen } from "@testing-library/react";
import QuizzLink from "./QuizzLink";
import { Link } from "react-router-dom";

// Mock the Link component from react-router-dom
jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: JSX.Element }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("QuizzLink", () => {
  it("renders the text prop", () => {
    const text = "Start Quizz";
    const route = "/quizz";
    render(<QuizzLink text={text} route={route} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders the link with the route prop", () => {
    const text = "Start Quizz";
    const route = "/quizz";
    render(<QuizzLink text={text} route={route} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", route);
  });
});
