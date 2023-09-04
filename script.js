let currentValue = "";
let signPresent = 0;
let display, value, operators, operands, result;
function appendToDisplay(value) {
  if (
    (value === "+" || value === "-" || value === "*" || value === "/") &&
    signPresent === 0
  ) {
    display = document.getElementById("display");
    // console.log(signPresent + "h");
    // console.log("kk");
    display.value += value;
    // currentValue+=value;
    currentValue = "";
    signPresent = 1;
    console.log(signPresent + "2");
  } else {
    if (!(value === "+" || value === "-" || value === "*" || value === "/")) {
      display = document.getElementById("display");
      display.value += value;
      currentValue += value;
      signPresent = 0;
    }
  }
}

function appendToDecimal(value) {
  if (currentValue.length == 0) {
    display = document.getElementById("display");
    display.value += "0";
    display.value += value;
    currentValue += value;
  }
  if (!currentValue.includes(".")) {
    display = document.getElementById("display");
    display.value += value;
    currentValue += value;
  }
}

function clearDisplay() {
  display.value = "";
  currentValue = "";
  signPresent = 0;
}

function calculateResult() {
  value = document.getElementById("display").value;
  result = customEval(value);
  document.getElementById("display").value = result;
}

function customEval(value) {
  operators = value.match(/[+\-*/]/g);
  operands = value.split(/[+\-*/]/).map(function (item) {
    console.log(item);
    return parseFloat(item);
  });
  let oper = [];

  operands.forEach((element) => {
    if (typeof element === "number" && !isNaN(element)) {
      oper.push(element);
    }
  });

  console.log(oper.length);
  console.log(operators);
  console.log(operators.length);
  console.log(operands);
  console.log(operands.length);

  if (value[0] == "-" || value[0] == "+") {
    console.log("jfj");
    if (value[0] == "+") {
      operators.splice(0, 1);
    } else {
      operators.splice(0, 1);
      oper[0] = -1 * oper[0];
    }
  }
  console.log(oper);
  console.log(operators);

  operators.forEach((operator, i) => {
    if (operator === "*") {
      oper[i] = oper[i] * oper[i + 1];
      oper.splice(i + 1, 1);
      operators.splice(i, 1);
    } else if (operator === "/") {
      oper[i] = oper[i] / oper[i + 1];
      oper.splice(i + 1, 1);
      operators.splice(i, 1);
    }
  });

  let answer = oper[0];
  operators.forEach((operator, i) => {
    if (operator === "+") {
      answer += oper[i + 1];
    } else if (operator === "-") {
      answer -= oper[i + 1];
    }
  });

  if (isNaN(answer) || !isFinite(answer)) {
    clearAll();
    document.getElementById("display").innerHTML = "NaN";
  }

  return answer;
}

function clearAll() {
  // document.getElementById("display").innerHTML = "";
  signPresent = 0;
}
