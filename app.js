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
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
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
    let computation;
    const prev = parseFloat(this.lastOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.lastOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
      maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.lastOperandText.innerText = `${this.getDisplayNumber(this.lastOperand)} ${this.operation}`;
    } else {
      this.lastOperandText.innerText = '';
    }
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
});

equalBtn.addEventListener('click', btn => {
  calculator.compute();
  calculator.updateDisplay();
})

allClearBtn.addEventListener('click', btn => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteBtn.addEventListener('click', btn => {
  calculator.delete();
  calculator.updateDisplay();
})