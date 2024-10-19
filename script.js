let expression = "";

function appendNumber(number) {
  expression += number;
  document.getElementById('result').innerText = expression;
}

function appendOperator(operator) {
  if (operator === 'x') {
    expression += '*';
  } else {
    expression += operator;
  }
  document.getElementById('result').innerText = expression;
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById('result').innerText = expression;
}

function clearInput() {
  expression = "";
  document.getElementById('result').innerText = "";
}

function calculate() {
  try {
    const result = eval(expression);
    // Check if the result is an integer
    if (Number.isInteger(result)) {
      document.getElementById('result').innerText = result;
    } else {
      document.getElementById('result').innerText = result.toFixed(3);
    }
  } catch (error) {
    document.getElementById('result').innerText = "Error";
  }
}
