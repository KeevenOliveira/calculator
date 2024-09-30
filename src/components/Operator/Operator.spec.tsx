import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Operator from ".";

describe("<Operator/>", () => {
  it("renders correctly", () => {
    const setValue = jest.fn();
    const operator = "+";
    const { getByText } = render(
      <Operator operator={operator} setValue={setValue} />
    );
    expect(getByText(operator)).toBeInTheDocument();
  });

  it("calls setValue with the correct value when clicked", () => {
    const setValue = jest.fn();
    const operator = "+";
    const prevValue = "0";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe(operator);
    });
    const { getByText } = render(
      <Operator operator={operator} setValue={setValue} />
    );
    const button = getByText(operator);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });

  it("replaces the previous value if it is 0", () => {
    const setValue = jest.fn();
    const operator = "+";
    const prevValue = "0";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe(operator);
    });
    const { getByText } = render(
      <Operator operator={operator} setValue={setValue} />
    );
    const button = getByText(operator);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });

  it("replaces the last character if it is an operator", () => {
    const setValue = jest.fn();
    const operator = "+";
    const prevValue = "1+";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe("1" + operator);
    });
    const { getByText } = render(
      <Operator operator={operator} setValue={setValue} />
    );
    const button = getByText(operator);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });

  it("appends the operator to the previous value", () => {
    const setValue = jest.fn();
    const operator = "+";
    const prevValue = "1";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe(prevValue + operator);
    });
    const { getByText } = render(
      <Operator operator={operator} setValue={setValue} />
    );
    const button = getByText(operator);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });
});
