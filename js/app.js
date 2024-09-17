class Calculator {
  constructor(num1, num2, operator) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return this.num1 / this.num2;
  }

  compute() {
    switch (this.operator) {
      case "add":
        return this.add();
      case "subtract":
        return this.subtract();
      case "multiply":
        return this.multiply();
      case "divide":
        return this.divide();
      default:
        throw new Error("Invalid operator");
    }
  }

  setNum1(num) {
    this.num1 = num;
  }

  setNum2(num) {
    this.num2 = num;
  }

  setOperator(operator) {
    this.operator = operator;
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  const calculateBtn = document.querySelector("#calculateBtn");
  calculateBtn.addEventListener("click", () => {
    const calculator = new Calculator(
      Number(num1.value),
      Number(num2.value),
      operation.value
    );
    try {
      const result = calculator.compute();
      document.getElementById("result").innerText = result;
    } catch (error) {
      document.getElementById("result").innerText = error.message;
    }
  });
});
