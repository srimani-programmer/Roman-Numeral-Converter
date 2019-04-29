function convertToRoman(num) {
  'use strict';

 let decimalValue = [ 1000000,500000,100000,50000,10000,5000,1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanNumeral = [ '_M','_D','_C','_L','_X','_V','M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];


  let romanized = '';

  if(num < 1 || num > 3999999){
    romanized += 'Enter a valid Roman numeral or number from 1 to 3,999,999';
  }else{
    for (let i = 0; i < decimalValue.length; i++) {
      //get the value inside decimalValue (ex: 40>36 -> cannot, 10<36 -> yes)
      //while the num is lower than decimalValue, it will keep looping
      while (decimalValue[i] <= num) {
      //get the value inside romanNumeral
      //ex: X; XX; XXX; XXXV; XXXVI
        romanized += romanNumeral[i];
      //ex: 36-10->26 ; 26-10->16 ; 16-10->6 ; 6-5->1 ; 1-1->0
        num -= decimalValue[i];
      }
    }
  }
  return romanized;
}

// FEATURE OPTION 1: PRESS 'convert' BUTTON TO CONVERT
let convertButton = document.getElementById("convert");

convertButton.addEventListener("click", function(){
  'use strict';

  let value = document.getElementById("input").value;
  value = parseInt(value);
  let answer = document.getElementById("answer");

  if(convertToRoman(value)){
     answer.innerHTML= "Result: " + convertToRoman(value);
  }else if(convertToRoman(value === "")){
    answer.innerHTML = "Please enter the number";
  }else if(convertToRoman(value === 0)){
    answer.innerHTML ="Romans have no concept of zero.";
  }else if(convertToRoman(value < 0)){
    answer.innerHTML = "This doesn\'t work for negative numbers.";
  }
  else{
    answer.innerHTML="Sorry, this simple app can only convert number to roman, not the other way around.";
  }

});
