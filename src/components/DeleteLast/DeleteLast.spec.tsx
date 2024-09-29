import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DeleteLast from ".";

describe("<DeleteLast/>", () => {
  it("renders correctly", () => {
    const setValue = jest.fn();
    const { getByText } = render(<DeleteLast setValue={setValue} />);
    expect(getByText("←")).toBeInTheDocument();
  });

  it("calls setValue with the correct value when clicked", () => {
    const setValue = jest.fn();
    const { getByText } = render(<DeleteLast setValue={setValue} />);
    const button = getByText("←");
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(expect.any(Function));
  });

  it("deletes the last character from the string when clicked", () => {
    const setValue = jest.fn();
    const prevValue = "123";
    const { getByText } = render(<DeleteLast setValue={setValue} />);
    const button = getByText("←");

    setValue.mockImplementation((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe("12");
    });

    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
  });

  it('sets the value to "0" when the string has only one character', () => {
    const setValue = jest.fn((value) => value);
    const prevValue = "1";
    const { getByText } = render(<DeleteLast setValue={setValue} />);
    const button = getByText("←");
    setValue.mockImplementationOnce((callback) => {
      const newValue = callback(prevValue);
      expect(newValue).toBe("0");
    });
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(expect.any(Function));
  });

  it('does not change the value when it is already "0"', () => {
    const setValue = jest.fn((value) => value);
    const prevValue = "0";
    const { getByText } = render(<DeleteLast setValue={setValue} />);
    const button = getByText("←");
    setValue.mockImplementationOnce((value) => {
      const newValue = value(prevValue);
      expect(newValue).toBe("0");
    });
    fireEvent.click(button);
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(expect.any(Function));
  });
});
