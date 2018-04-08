var mifflin = require("../index");
 
describe("mifflin", function () {
 // Add 2 numbers
  it("should add 2 and 3", function () {
    var sum = mifflin.macros({weight: 132,height:{ft:6,in:1},birthday:481834906});
    expect(sum.carbs.weightloss).toBe('137.0');
  });
 
  // Subtract 2 numbers
  /*it("should Subtract 2 and 3", function () {
    var difference = mifflin.subtract(2, 3);
    expect(difference).toBe(-1);
  });
 
  // Multiply 2 numbers
  it("should Multiply 2 and 3", function () {
    var product = mifflin.multiply(2, 3);
    expect(product).toBe(6);
  });
 
  // Divide 2 numbers
  it("should Divide 6 and 2", function () {
    var reminder = mifflin.divide(6, 2);
    expect(reminder).toBe(3);
  });
 
  // Modulo 2 numbers
  it("should Modulo 6 and 2", function () {
    var quot = mifflin.modulo(6, 2);
    expect(quot).toBe(0);
  });*/
 });