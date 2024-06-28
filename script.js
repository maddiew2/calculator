//Math functions performed by the calculator
function sum(firstValue,secondValue) {
    result = parseFloat(firstValue) + parseFloat(secondValue)
    return result
  };
  function subtract(firstValue,secondValue) {
    result = parseFloat(firstValue) - parseFloat(secondValue)
    return result
  };
  function multiply(firstValue,secondValue) {
    result = parseFloat(firstValue) * parseFloat(secondValue)
    return result
  };
  function divide(firstValue,secondValue) {
    if (secondValue == 0){
      return result = "Not a number"
    }
    result = parseFloat(firstValue) / parseFloat(secondValue)
    return result
  };
  
  
  //This function saves the result of the calculation into an array
  function operate(firstValue,operation,secondValue) {
    if (operation == '+') {
      return myArray[0] = sum(firstValue,secondValue)
    }
    else if (operation == "-") {
      return myArray[0] = subtract(firstValue,secondValue)
    }
    else if (operation == "×") {
      return myArray[0] = multiply(firstValue,secondValue)
    }
    else if (operation == "÷") {
      return myArray[0] = divide(firstValue,secondValue)
    }
  };
  
  //UI
  
  //This function is to import basic elements, to state original state of most triggers and variables, as well as, saves and display numbers selected
  const numbers = document.querySelectorAll(".middle button")
  const display = document.querySelector("#display")
  clicked = false
  clean = true
  myArray = []
  let b = null
  numbers.forEach((button) => {
    button.addEventListener('click', function saveNumber(e) {
      if (clicked == false) {
        if (clean == false) {
          display.textContent = ''
          myArray = []
          clean = true
        }
        a = display.textContent += e.target.innerText
        firstValue = a
        exceedsDisplay()
      }  
      if ((clicked == true) && (clean == true)) {
          display.textContent = ''
          clean = false
          for (let i = 0; i < operator.length; i++) {
            operator[i].disabled = false;
          }
          equal.disabled = false
      }
      if (clean == false) {
          b = display.textContent += e.target.innerText
          secondValue = b
          exceedsDisplay()
        }
    })
  });
  
  //Operator buttons: triggers 'variables', does operation, show final value, and selects operator for next calculation
  const operator = document.querySelectorAll(".rightSide button")
  operator.forEach((button) => {
    button.addEventListener('click', function saveOperator(e) {
      clicked = true;
      clean = true;
      decimalPoint.disabled = false;
      if ((b != null) && (myArray.length != 0)){
        display.textContent = myArray[0]
      }
      if((b != null) && (typeof myArray[0] === "undefined")) {
        operate(firstValue,operation,secondValue)
        display.textContent = myArray[0]
        exceedsDisplay()
        for (let i = 0; i < operator.length; i++) {
          operator[i].disabled = true;
        }
      }
      else if ((b != null) && (typeof myArray[0] != "undefined")) {
        operate(myArray[0],operation,secondValue)
        display.textContent = myArray[0]
        exceedsDisplay()
        for (let i = 0; i < operator.length; i++) {
          operator[i].disabled = true;
        }
      }
      operation = e.target.innerText; //the calculation goes first and only lastly it receives the operator selected for the next calculation
    })
  });
  
  //This function resets the program to its original state
  const clear = document.querySelector(".top #idClear")
  clear.addEventListener("click", eraseAll)
  function eraseAll() {
      firstValue = display.textContent = ''
      secondValue = display.textContent = ''
      b = null
      myArray = []
      clicked = false
      decimalPoint.disabled = false
      equal.disabled = false;
      for (let i = 0; i < operator.length; i++) {
        operator[i].disabled = false;
      }
  };
  
  //Equal button: resets some triggers, does operation, and show final value
  const equal = document.querySelector(".btnEqual")
  equal.addEventListener("click", fEqual)
  function fEqual(){
    clicked = false;
    clean = false
    decimalPoint.disabled = false;
    if((b != null) && (typeof myArray[0] === "undefined")) {
      operate(firstValue,operation,secondValue)
      display.textContent = myArray[0]
      exceedsDisplay()
      equal.disabled = false;
      }
    else if ((b != null) && (typeof myArray[0] != "undefined")) {
      operate(myArray[0],operation,secondValue)
      display.textContent = myArray[0]
      exceedsDisplay()
      equal.disabled = false;
    }
    b = null //reset b, so it can use the number on display(myArray) w/ a number picked next in the keyboard and perform the next calculation.
  };
  
  //This function is to disable '.' after being used one single time
  const decimalPoint = document.getElementById("decimalPoint")
  decimalPoint.addEventListener("click", () => {
    decimalPoint.disabled = true;
  });
  
  //This function is to limit the amount of digit in the screen
  function exceedsDisplay(){ 
    if (myArray.length != 0) {
      if ((myArray[0].toString().length > 8) && (myArray[0] != "Not a number")) {
        eraseAll()
        display.textContent = 'Infinity'
      }
    }
    if ((display.textContent.length > 8) && (myArray[0] != "Not a number")) {
      eraseAll()
    }
  };
  
  //This function is to turn positive into negative and vice-versa
  const positiveNegative = document.getElementById("idPositiveNegative")
  positiveNegative.addEventListener("click", () => {
    if ((a == firstValue) && (a == display.textContent)) {
      a = (a *- 1)
      firstValue = a
      return display.textContent = a
    }
    else if ((b == secondValue) && (b == display.textContent)) {
      b = (b * -1)
      secondValue = b
      return display.textContent = b
    }
    else if ((myArray[0] == display.textContent)) {
      myArray[0] = (myArray[0] * -1)
      firstValue = myArray[0]
      return display.textContent = myArray[0]
    }
  });
  
  
  //Keyboard function
  document.addEventListener("keydown", function keyboard(e) {
    if (e.key == 0) { document.getElementById("zero").click(); }
    if (e.key == 1) { document.getElementById("one").click(); }
    if (e.key == 2) { document.getElementById("two").click(); }
    if (e.key == 3) { document.getElementById("three").click(); }
    if (e.key == 4) { document.getElementById("four").click(); }
    if (e.key == 5) { document.getElementById("five").click(); }
    if (e.key == 6) { document.getElementById("six").click(); }
    if (e.key == 7) { document.getElementById("seven").click(); }
    if (e.key == 8) { document.getElementById("eight").click(); }
    if (e.key == 9) { document.getElementById("nine").click(); }
    if (e.key == "*") { document.getElementById("multiplication").click(); }
    if (e.key == "/") { document.getElementById("division").click(); }
    if (e.key == "-") { document.getElementById("minus").click(); }
    if (e.key == "+") { document.getElementById("plus").click(); }
    if (e.key == "Enter" || e.key == "=") {
        e.preventDefault() //To prevent key 'enter' to send form
        equal.click();
    }
    if (e.key == ".") { decimalPoint.click(); }
  });