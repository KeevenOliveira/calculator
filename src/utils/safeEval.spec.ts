import { waitFor } from "@testing-library/dom";
import safeEval from "./safeEval";

describe("safeEval", () => {
  it("throws an error for invalid expressions", () => {
    expect(() => safeEval("a + b")).toThrow("Expressão inválida");
    expect(() => safeEval("1 +")).toThrow("Expressão inválida");
    expect(() => safeEval("1a")).toThrow("Expressão inválida");
  });

  it("evaluates simple expressions correctly", () => {
    waitFor(() => {
      expect(safeEval("1 + 2")).toBe("3");
      expect(safeEval("2 * 3")).toBe("6");
      expect(safeEval("4 - 2")).toBe("2");
      expect(safeEval("6 / 2")).toBe("3");
    });
  });

  it("evaluates complex expressions correctly", () => {
    waitFor(() => {
      expect(safeEval("(1 + 2) * 3")).toBe("9");
      expect(safeEval("2 * (3 + 4)")).toBe("14");
      expect(safeEval("(4 - 2) * (6 / 2)")).toBe("6");
    });
  });

  it('replaces "x" with "*" correctly', () => {
    waitFor(() => {
      expect(safeEval("2 x 3")).toBe("6");
      expect(safeEval("(2 x 3) + 4")).toBe("10");
    });
  });

  it("adds implicit multiplication correctly", () => {
    waitFor(() => {
      expect(safeEval("(2)(3)")).toBe("6");
      expect(safeEval("(2)(3) + 4")).toBe("10");
    });
  });
});
