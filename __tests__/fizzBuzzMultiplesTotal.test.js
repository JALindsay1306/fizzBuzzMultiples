const fizzBuzzMultiplesTotal = require("../katas/fizzBuzzMultiplesTotal");

describe("fizzBuzzMultiplesTotal",()=>{
    test("returns a number",()=>{
        expect(typeof fizzBuzzMultiplesTotal()).toBe("number")
    });
    test("returns 0 when passed an argument of 3 or less",()=>{
        expect(fizzBuzzMultiplesTotal(2)).toBe(0);
    });
    test("returns 3 when passed 4/5",()=>{
        expect(fizzBuzzMultiplesTotal(4)||fizzBuzzMultiplesTotal(5)).toBe(3);
    });
    test("when passed 6, returns a sum of 3 and 5",()=>{
        expect(fizzBuzzMultiplesTotal(6)).toBe(8);
    });
    test("passes examples provided",()=>{
        expect(fizzBuzzMultiplesTotal(1)).toBe(0);
        expect(fizzBuzzMultiplesTotal(5)).toBe(3);
        expect(fizzBuzzMultiplesTotal(6)).toBe(8);
        expect(fizzBuzzMultiplesTotal(10)).toBe(23);
        expect(fizzBuzzMultiplesTotal(12)).toBe(33);
    });
    test("passes very large example",()=>{
        expect(fizzBuzzMultiplesTotal(200)).toBe(9168);
    });
});