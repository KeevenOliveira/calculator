import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MathOperators from ".";

describe("MathOperators", () => {
  const setValueMock = jest.fn();

  beforeEach(() => {
    render(<MathOperators setValue={setValueMock} />);
  });

  it("should render operators correctly", () => {
    const operators = ["+", "-", "*", "/"];
    operators.forEach((op) => {
      expect(screen.getByText(op)).toBeInTheDocument();
    });
  });

  it("should render parentheses correctly", () => {
    const parentheses = ["(", ")"];
    parentheses.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument();
    });
  });

  it("should render equal button correctly", () => {
    expect(screen.getByText("=")).toBeInTheDocument();
  });

  it("should call setValue when an operator is clicked", () => {
    const operatorButton = screen.getByText("+");
    fireEvent.click(operatorButton);
    expect(setValueMock).toHaveBeenCalledTimes(1);
  });

  it("should call setValue when equal button is clicked", () => {
    const equalButton = screen.getByText("=");
    fireEvent.click(equalButton);
    expect(setValueMock).toHaveBeenCalledTimes(1);
  });
});
