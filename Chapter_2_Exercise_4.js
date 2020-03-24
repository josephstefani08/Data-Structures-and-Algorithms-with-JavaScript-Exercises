// Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

var letters = {
    "letterArray": ['a', 'b', 'c', 'd'],
  };
  
  function showLetters() {
    var letterString = '';
    for(var i = 0; i < letters.letterArray.length; i++) {
      letterString += letters.letterArray[i];
    }
    return letterString;
  }
  
  var combinedLetters = showLetters();
  console.log(combinedLetters);