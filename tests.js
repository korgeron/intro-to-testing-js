// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// plusOne

describe('plusOne', function (){
    it('should define a function', function () {
        expect(typeof plusOne).toBe("function")

    });
    it('should return a number', function () {
        expect(typeof plusOne()).toBe("number")
    });
    it('should return 5 when passed 4', function () {
        expect(plusOne(4)).toBe(5)
    });
    it('should return 6 when passed 5', function () {
        expect(plusOne(5)).toBe(6)
    });
})


//sayHello

describe('sayHello' , function (){
    it('should be a function ', function () {
        expect(typeof sayHello).toBe("function")
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" if false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return "not a name" if passed a number', function () {
        expect(sayHello(4)).toBe("not a name")
    });
    it('should return not a name if passed "5" ', function () {
        expect(sayHello("5")).toBe("not a name")
    });
    it('should return not a name if passed Array ', function () {
        expect(sayHello(["5"])).toBe("not a name")
    });
})

//isFive

describe('isFive' , function (){
    it('should define a function isFive', function () {
        expect(typeof isFive).toBe("function")
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true if passed the value 5', function () {
        expect(isFive(5)).toBe(true)
    });
})