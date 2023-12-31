import analyzeArray from "./analyzeArray";
import calculator from "./calculator";
import capitalize from "./capitalize";
import cipher from "./cipher";
import reverseString from "./reverseString";

// Capitalize
test("Capitalizes", () => {
    expect(capitalize("ahoy")).toBe("Ahoy");
});

// Reverse String
test("Reverses string", () => {
    expect(reverseString("ahoy")).toBe("yoha");
});

// Calculator
test("Calculates", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.multiply(4, 2)).toBe(8);
    expect(calculator.divide(1, 2)).toBe(0.5);
});

// Ceasar Cipher
test("Shifts", () => {
    expect(cipher("abcd", 5)).toBe("fghi");
});

test("Wraps", () => {
    expect(cipher("wxyz", 5)).toBe("bcde");
});

test("Wraps Backwards", () => {
    expect(cipher("abcd", -5)).toBe("vwxy");
});

test("Wraps with big numbers", () => {
    expect(cipher("wxyz", 26 + 26 + 5)).toBe("bcde");
});

test("Wraps backwards with big numbers", () => {
    expect(cipher("abcd", -26 - 26 - 5)).toBe("vwxy");
});

test("Wraps to self", () => {
    expect(cipher("abcd", 26)).toBe("abcd");
});

test("Wraps backwards to self", () => {
    expect(cipher("abcd", -26)).toBe("abcd");
});

test("Only shifts letters", () => {
    expect(cipher("a, b,| c,d|.;/", 5)).toBe("f, g,| h,i|.;/");
});

test("Works with big letters", () => {
    expect(cipher("A, b,| C,D|.;/", 5)).toBe("F, g,| H,I|.;/");
});

// Analyze Array
test("Analyzes Array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
