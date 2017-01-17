function convertToRoman(num) {
  var romanNumeral = [];
  var numArr = num.toString().split('');
  var numLength = numArr.length;
  
  function I() {
    romanNumeral.push("I");
  }
  function V() {
    romanNumeral.push("V");
  }
  function X() {
    romanNumeral.push("X");
  }
  function L() {
    romanNumeral.push("L");
  }
  function C() {
    romanNumeral.push("C");
   }
  function D() {
    romanNumeral.push("D");
  }
  function M() {
    romanNumeral.push("M");
  }
  
  function fromOneToThree () {
    switch (numLength) {
      case 1:
        I ();
        break;
      case 2:
        X ();
        break;
      case 3:
        C ();
        break;
      case 4:
        M ();
        break;
     }
  }
  
  function exactFour () {
    switch (numLength) {
      case 1:
        I ();
        V ();
        break;
      case 2:
        X ();
        L ();
        break;
      case 3:
        C ();
        D ();
        break;
    }
  }
  
  function exactFive () {
    switch (numLength) {
      case 1:
        V ();
        break;
      case 2:
        L ();
        break;
      case 3:
        D ();
        break;
     }
  }
  
  function exactNine () {
    switch (numLength) {
      case 1:
        I ();
        X ();
        break;
      case 2:
        X ();
        C ();
        break;
      case 3:
        C ();
        M ();
        break;
     }
  }
  
  for (var i = 0; i<numArr.length; i++) {
    if (numArr[i] < 4) {
      for (var j = 0; j<numArr[i]; j++) {
        fromOneToThree ();
      }     
    } else if (numArr[i] < 5) {
       for (var j = 3; j<numArr[i]; j++) {
        exactFour ();
      }     
    } else if (numArr[i] < 9) {
        exactFive ();
        for (var j = 5; j<numArr[i]; j++) {
          fromOneToThree ();
      }
    } else if (numArr[i] < 10) {
        for (var j = 8; j<numArr[i]; j++) {
          exactNine ();
      }
    }
    numLength--;
   }
  
 return romanNumeral.join('');
}

convertToRoman(9);
