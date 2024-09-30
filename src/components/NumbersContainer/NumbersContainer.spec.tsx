import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import NumbersContainer from ".";

describe("NumbersContainer", () => {
  it("renders correctly", () => {
    const setValue = jest.fn();
    const values = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];

    const { getByText } = render(<NumbersContainer setValue={setValue} />);

    values.forEach((value) => {
      expect(getByText(value)).toBeInTheDocument();
    });
  });

  it("calls setValue with the correct value when a number is clicked", () => {
    const setValue = jest.fn();
    const { getByText } = render(<NumbersContainer setValue={setValue} />);
    const button = getByText("7");
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(expect.any(Function));
  });

  it("calls setValue with the correct value when the delete last button is clicked", () => {
    const setValue = jest.fn();
    const { getByText } = render(<NumbersContainer setValue={setValue} />);
    const button = getByText("←");
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(expect.any(Function));
  });

  it("renders the correct number of rows", () => {
    const setValue = jest.fn();
    const { getAllByTestId } = render(<NumbersContainer setValue={setValue} />);
    const rows = getAllByTestId("numbers-container-row");
    expect(rows.length).toBe(4);
  });

  it("renders the correct number of numbers in each row", () => {
    const setValue = jest.fn();
    const { getAllByTestId } = render(<NumbersContainer setValue={setValue} />);
    const rows = getAllByTestId("numbers-container-row");
    rows.forEach((row) => {
      const numbers = row.children;
      console.log(numbers, "numbers");
      expect(numbers.length).toBe(3);
    });
  });
});
