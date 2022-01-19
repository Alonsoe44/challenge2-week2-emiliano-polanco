/* eslint-disable no-use-before-define */
// Lets define some variables

// Variables to store the main values i use do do the operations
let firstValue = NaN;
let operator = NaN;
let writing = true;
let stringValue = "";
const overload = 19;
// Numbers
const n1 = document.getElementById("number1");
const n2 = document.getElementById("number2");
const n3 = document.getElementById("number3");
const n4 = document.getElementById("number4");
const n5 = document.getElementById("number5");
const n6 = document.getElementById("number6");
const n7 = document.getElementById("number7");
const n8 = document.getElementById("number8");
const n9 = document.getElementById("number9");
const n0 = document.getElementById("number0");

// Operations

const plus = document.getElementById("splus");
const minus = document.getElementById("sminus");
const mult = document.getElementById("smult");
const divi = document.getElementById("sdivi");
const equals = document.getElementById("equal");
const allClear = document.getElementById("allClear");
const comma = document.getElementById(",");

const screenInput = document.getElementById("theScreen");

// Function on click

n1.onclick = writeScreen1;
n2.onclick = writeScreen2;
n3.onclick = writeScreen3;
n4.onclick = writeScreen4;
n5.onclick = writeScreen5;
n6.onclick = writeScreen6;
n7.onclick = writeScreen7;
n8.onclick = writeScreen8;
n9.onclick = writeScreen9;
n0.onclick = writeScreen0;

// Operations
plus.onclick = TimeToSum;
minus.onclick = TimeToRest;
mult.onclick = TimeToMulti;
divi.onclick = TimeToDivi;
equals.onclick = TimeToEqual;
allClear.onclick = emptyVariables;
comma.onclick = addComma;

// Functions for numbers

function writeScreen1() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }

  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 1;
  }
}
function writeScreen2() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }

  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 2;
  }
}
function writeScreen3() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }

  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 3;
  }
}
function writeScreen4() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }

  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 4;
  }
}
function writeScreen5() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }
  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 5;
  }
}
function writeScreen6() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }
  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 6;
  }
}
function writeScreen7() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }
  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 7;
  }
}
function writeScreen8() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }
  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 8;
  }
}
function writeScreen9() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }
  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 9;
  }
}
function writeScreen0() {
  if (screenInput.value === "") {
    screenInput.dir = "rtl";
  }
  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  if (screenInput.value.length < overload) {
    screenInput.value += 0;
  }
}
function addComma() {
  if (!writing) {
    screenInput.value = "";
    writing = true;
  }
  screenInput.dir = "ltr";
  screenInput.value += ".";
  screenInput.dir = "rtl";
}
// Operation functions
function TimeToSum() {
  writing = false;
  if (!Number.isNaN(operator)) {
    operationTime(parseFloat(screenInput.value));
    screenInput.value = firstValue;
  } else {
    firstValue = parseFloat(screenInput.value);
    negTail();
  }
  operator = 0;
  console.log(`FirstValue: ${firstValue} operator: ${operator}`);
}
function TimeToRest() {
  writing = false;
  if (!Number.isNaN(operator)) {
    operationTime(parseFloat(screenInput.value));
    screenInput.value = firstValue;
  } else {
    firstValue = parseFloat(screenInput.value);
    negTail();
  }
  operator = 1;
  console.log(
    `FirstValue: ${firstValue} operator: ${operator} writing:${writing}`
  );
}
function TimeToMulti() {
  writing = false;
  if (!Number.isNaN(operator)) {
    operationTime(parseFloat(screenInput.value));
    screenInput.value = firstValue;
  } else {
    firstValue = parseFloat(screenInput.value);
    negTail();
  }
  operator = 2;
  console.log(`FirstValue: ${firstValue} operator: ${operator}`);
}
function TimeToDivi() {
  writing = false;
  if (!Number.isNaN(operator)) {
    operationTime(parseFloat(screenInput.value));
    screenInput.value = firstValue;
  } else {
    firstValue = parseFloat(screenInput.value);
    negTail();
  }
  operator = 3;
  console.log(`FirstValue: ${firstValue} operator: ${operator}`);
}
function TimeToEqual() {
  writing = false;
  operationTime(parseFloat(screenInput.value));
  if (firstValue < 0) {
    stringValue = firstValue.toString(10);
    stringValue = `${stringValue.slice(1, stringValue.length)}-`;
    screenInput.value = stringValue;
    console.log(stringValue);
  } else {
    screenInput.value = firstValue;
  }

  operator = NaN;
  console.log(`FirstValue: ${firstValue} operator: ${operator}`);
}

function emptyVariables() {
  firstValue = NaN;
  screenInput.value = "";
  operator = NaN;
  console.log("function runnign");
  screenInput.dir = "ltr";
}

// This is the main operator function

function operationTime(newValue) {
  switch (operator) {
    case 0:
      firstValue += newValue;
      break;
    case 1:
      firstValue -= newValue;
      break;
    case 2:
      firstValue *= newValue;
      break;
    case 3:
      firstValue /= newValue;
      break;
    default:
      break;
  }
}

function negTail() {
  const theString = screenInput.value;
  if (theString[theString.length - 1] === "-") {
    firstValue *= -1;
  }
}
