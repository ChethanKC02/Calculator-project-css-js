let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function removeLast(){  
  let n = displayValue.length;
  if(n != 0){
    displayValue = displayValue.slice(0,-1);
    document.getElementById('display').value= displayValue;
  }
}

function calculate() {
  try {
    if (displayValue != '') {
      displayValue = eval(displayValue);
      document.getElementById('display').value = displayValue;
    }
    else {
      document.getElementById('display').value = "No Input Value  !";
    }
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
