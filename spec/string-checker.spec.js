
let calc = require('../src/string-checker');

let calculator = new calc;

describe("string calculator to add numbers", function () {
    it("should return zero when string is empty", function () {
        expect(calculator.Add("")).toEqual(0);
    });

    it("should add unknown amount of numbers", function () {
        expect(calculator.Add("1,2,3,4")).toEqual(10);
    });

});