class Calculator {
  constructor(lastOperandText, currentOperandText) {
    this.lastOperandText = lastOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.lastOperand = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.lastOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.lastOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {

  }

  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand;
    this.lastOperandText.innerText = this.lastOperand;
  }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const lastOperandText = document.querySelector('[data-last-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(lastOperandText, currentOperandText);

numberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  })
});

operBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
  })
})