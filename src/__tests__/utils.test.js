// Your tests here
// src/__tests__/utils.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("MoM")).toBe(true);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters");
    expect(() => isPalindrome("hello!")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
  });

  it("returns true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("returns true for an empty string", () => {
    expect(() => isPalindrome("")).toThrow("Input must contain only alphabetic characters");
  });
});
