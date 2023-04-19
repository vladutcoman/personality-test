import React from "react";
import { render } from "@testing-library/react";
import withErrorCheck, { ErrorCheckProps } from "./withErrorCheck";
import withLayout from "./withLayout";
import QuizzLink, { QuizzLinkProps } from "../components/QuizzLink/QuizzLink";

// mock the QuizzLink component
jest.mock("../components/QuizzLink/QuizzLink", () => {
  return jest.fn().mockImplementation(() => {
    return <div>QuizzLink</div>;
  });
});

interface TestComponentProps extends ErrorCheckProps {
  title: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ title, error }) => {
  return <h1>{error ? "Error" : title}</h1>;
};

describe("withErrorCheck", () => {
  it("renders component when no error prop", () => {
    const EnhancedComponent = withErrorCheck(TestComponent);
    const { getByText } = render(
      <EnhancedComponent title="Hello" error={false} resource="test" />
    );
    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("renders error message when error prop is true", () => {
    const EnhancedComponent = withErrorCheck(TestComponent);
    const { getByText } = render(
      <EnhancedComponent title="Hello" error={true} resource="test" />
    );
    expect(getByText("Could not load test")).toBeInTheDocument();
  });
});

describe("withLayout", () => {
  it("renders the wrapped component", () => {
    const WrappedComponent = () => <div>Test</div>;
    const LayoutComponent = withLayout(WrappedComponent);
    const { getByText } = render(<LayoutComponent />);

    expect(getByText("Test")).toBeInTheDocument();
  });

  it("renders the QuizzLink component with the correct props", () => {
    const WrappedComponent = () => <div>Test</div>;
    const LayoutComponent = withLayout(WrappedComponent);
    const { getByText } = render(<LayoutComponent />);

    const expectedProps: QuizzLinkProps = {
      route: "/",
      text: "Back to Start",
    };
    expect((QuizzLink as jest.Mock).mock.calls[0][0]).toEqual(expectedProps);
  });
});
