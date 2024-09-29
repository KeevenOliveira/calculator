import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Equal from ".";

describe("<Equal/>", () => {
  it("renders correctly", () => {
    const mockSetValue = jest.fn();
    render(<Equal setValue={mockSetValue} />);
    expect(screen.getByText("=")).toBeInTheDocument();
  });

  it("calls setValue with correct result when clicked", () => {
    const mockSetValue = jest.fn();
    render(<Equal setValue={mockSetValue} />);
    fireEvent.click(screen.getByText("="));
    expect(mockSetValue).toHaveBeenCalled();
  });

  it("handles basic arithmetic correctly", () => {
    const mockSetValue = jest.fn();
    render(<Equal setValue={mockSetValue} />);
    fireEvent.click(screen.getByText("="));
    const setValueCall = mockSetValue.mock.calls[0][0];
    expect(setValueCall("2+2")).toBe("4");
    expect(setValueCall("3*4")).toBe("12");
    expect(setValueCall("10/2")).toBe("5");
    expect(setValueCall("5-3")).toBe("2");
  });

  it("handles invalid expressions", () => {
    const mockSetValue = jest.fn();
    render(<Equal setValue={mockSetValue} />);
    fireEvent.click(screen.getByText("="));
    const setValueCall = mockSetValue.mock.calls[0][0];
    expect(setValueCall("2+")).toBe("0");
    expect(setValueCall("2/0")).toBe("Infinity");
  });
});
