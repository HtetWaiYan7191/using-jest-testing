import sum from "./testBabelSum";

describe('testBabelSum', () => {
    test('check if the sum function work from testBabelSum fuction', () => {
        expect(sum(1,2)).toEqual(3);
    })
})