const calculator = {
    addition: (a, b) => a + b,
    substraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => a / b
}
console.log(calculator.addition(5, 10));
console.log(calculator.multiplication(100, 200));
console.log(calculator.substraction(1, 5000));
console.log(calculator.division(5, 6));

//creating object using new
const calculator2 = new Object();
calculator2.addition2 = (a, b) => a + b
calculator2.substraction2 = (a, b) => a - b;
calculator2.multiplication2 = (a, b) => a * b;
calculator2.division2 = (a, b) => a / b;

console.log(calculator2.addition2(10, 20))
console.log(calculator2.substraction2(50,20))
console.log(calculator2.multiplication2(100,1000))
console.log(calculator2.division2(10,2))