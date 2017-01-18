function convertToRoman(num) {
  var romanNumeral = [];
  var numArr = num.toString().split('');
  var numLength = numArr.length;

  function romanCharacter(char) {
    romanNumeral.push(char);
  }

  function fromOneToThree () {
    switch (numLength) {
      case 1:
        romanCharacter ("I");
        break;
      case 2:
        romanCharacter ("X");
        break;
      case 3:
        romanCharacter ("C");
        break;
      case 4:
        romanCharacter ("M");
        break;
     }
  }

  function exactFour () {
    switch (numLength) {
      case 1:
        romanCharacter ("I");
        romanCharacter ("V");
        break;
      case 2:
        romanCharacter ("X");
        romanCharacter ("L");
        break;
      case 3:
        romanCharacter ("C");
        romanCharacter ("D");
        break;
    }
  }

  function exactFive () {
    switch (numLength) {
      case 1:
        romanCharacter ("V");
        break;
      case 2:
        romanCharacter ("L");
        break;
      case 3:
        romanCharacter ("D");
        break;
     }
  }

  function exactNine () {
    switch (numLength) {
      case 1:
        romanCharacter ("I");
        romanCharacter ("X");
        break;
      case 2:
        romanCharacter ("X");
        romanCharacter ("C");
        break;
      case 3:
        romanCharacter ("C");
        romanCharacter ("M");
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
