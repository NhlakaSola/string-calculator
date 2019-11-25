
let calc = require('../src/string-calculator');

let calculator = new calc;

describe("string calculator to add numbers", function () {
    it("should return zero when string is empty", function () {
        expect(calculator.Add("")).toEqual(0);
    });

    it("should add unknown amount of numbers", function () {
        expect(calculator.Add("1,2,3,4")).toEqual(10);
    });

    it("should handle multiple delimiters of length longer than one char", function () {
        expect(calculator.Add("//[**][%%]\n1**2%%3")).toEqual(6);
    });   

    it("should ignore numbers bigger than 1000", function () {
        expect(calculator.Add("//;\n1002;23;2")).toEqual(25);
    });

    it("should throw an error when negatives are passed", function () {
        expect(calculator.Add("1002,-23")).toThrowError;
    });

    





});

console.log(calculator.Add("//;\n1;2"));