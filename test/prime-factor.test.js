const { generate } = require("../src/prime-factor")

describe("Prime number should", () => {
    it("returns an empty list for number one", () => {
        expect(generate(1)).toEqual([])
    })

    it("returns a list containing the primer factor for the 2 number", () => {
        expect(generate(2)).toEqual([2])
    })

    it("returns a list containing the primer factor for the 3 number", () => {
        expect(generate(3)).toEqual([3])
    })

    it("returns a list containing the primer factor for the 4 number", () => {
        expect(generate(4)).toEqual([2, 2])
    })

    it("returns a list containing the primer factor for the 5 number", () => {
        expect(generate(5)).toEqual([5])
    })
    
    it("returns a list containing the primer factor for the 6 number", () => {
        expect(generate(6)).toEqual([2, 3])
    })

    it("returns a list containing the primer factor for the 7 number", () => {
        expect(generate(7)).toEqual([7])
    })

    it("returns a list containing the primer factor for the 8 number", () => {
        expect(generate(8)).toEqual([2, 2, 2])
    })

    it("returns a list containing the primer factor for the 9 number", () => {
        expect(generate(9)).toEqual([3, 3])
    })

    it("returns a list containing the primer factor for the 10 number", () => {
        expect(generate(10)).toEqual([2, 5])
    })

    it("returns a list containing the primer factor for the 12 number", () => {
        expect(generate(12)).toEqual([2, 2, 3])
    })
})