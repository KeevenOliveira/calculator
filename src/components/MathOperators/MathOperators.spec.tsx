import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import MathOperators from ".";

describe("MathOperators Component", () => {
  it("renders all operators", () => {
    const mockSetValue = jest.fn();
    render(<MathOperators setValue={mockSetValue} />);
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByText("/")).toBeInTheDocument();
  });

  it("renders parentheses", () => {
    const mockSetValue = jest.fn();
    render(<MathOperators setValue={mockSetValue} />);
    expect(screen.getByText("(")).toBeInTheDocument();
    expect(screen.getByText(")")).toBeInTheDocument();
  });

  it("renders equal button", () => {
    const mockSetValue = jest.fn();
    render(<MathOperators setValue={mockSetValue} />);
    expect(screen.getByText("=")).toBeInTheDocument();
  });
});
