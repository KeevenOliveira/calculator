import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Number from ".";

describe("<Number/>", () => {
  it("renders correctly", () => {
    const setValue = jest.fn();
    const digit = "1";
    const { getByText } = render(<Number digit={digit} setValue={setValue} />);
    expect(getByText(digit)).toBeInTheDocument();
  });

  it("calls setValue with the correct value when clicked", () => {
    const setValue = jest.fn();
    const digit = "1";
    const prevValue = "0";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe(digit);
    });
    const { getByText } = render(<Number digit={digit} setValue={setValue} />);
    const button = getByText(digit);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });

  it("does not add a decimal point if it already exists", () => {
    const setValue = jest.fn();
    const digit = ".";
    const prevValue = "1.";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe(prevValue);
    });
    const { getByText } = render(<Number digit={digit} setValue={setValue} />);
    const button = getByText(digit);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });

  it("replaces the previous value if it is 0", () => {
    const setValue = jest.fn();
    const digit = "1";
    const prevValue = "0";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe(digit);
    });
    const { getByText } = render(<Number digit={digit} setValue={setValue} />);
    const button = getByText(digit);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });

  it("appends the digit to the previous value", () => {
    const setValue = jest.fn();
    const digit = "1";
    const prevValue = "2";
    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe(prevValue + digit);
    });
    const { getByText } = render(<Number digit={digit} setValue={setValue} />);
    const button = getByText(digit);
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });
});
