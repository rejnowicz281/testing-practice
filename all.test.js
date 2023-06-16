const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const cipher = require("./cipher");

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
