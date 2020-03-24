/*
Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array.
Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.
*/

function weekTemps() {
    this.dataStore = [
      [71, 72, 73, 74, 75, 76, 77], //Week 1
      [80, 81, 82, 83, 84, 85, 86], //Week 2
      [90, 91, 92, 93, 94, 95, 96], //Week 3
      [61, 62, 63, 64, 65, 66, 67], //Week 4
    ];
    this.add = add;
    this.average = average;
    this.monthlyAverage = monthlyAverage;
    this.weeksAverage = weeksAverage;
    this.allWeeksAverage = allWeeksAverage;
  }
  
  function add(week, temp) {
    var weekIsValid = checkNumber(week);
    if(weekIsValid === false) {
      return "Function only accepts a number between 0 - 3";
    }
    
    this.dataStore[week].push(temp);
  }
  
  function average(sum, total) {
    return sum / total;
  }
  
  function monthlyAverage() {
    var sum = 0;
    var temps = 0;
  
    for(var i = 0; i < this.dataStore.length; i++) {
      for(var j = 0; j < this.dataStore[i].length; j++) {
        sum += this.dataStore[i][j];
        temps++;
      }
    }
  
    var theAverage = average(sum, temps);
    return theAverage;
  }
  
  function weeksAverage(week) {
    var sum = 0;
    
    var isValid = checkNumber(week);
    if(isValid === false) {
      return "Function only accepts a number between 0 - 3";
    }
    
    for(var k = 0; k < this.dataStore[week].length; k++){
      sum += this.dataStore[week][k];
    }
    
    var aWeeksAverage = average(sum, this.dataStore[week].length);
    
    return aWeeksAverage;
  }
  
  function allWeeksAverage() {
    var allWeeks = {};
    allWeeks.weekOne = this.weeksAverage(0);
    allWeeks.weekTwo = this.weeksAverage(1);
    allWeeks.weekThree = this.weeksAverage(2);
    allWeeks.weekFour = this.weeksAverage(3);
    return allWeeks;
  }
  
  function checkNumber(num) {
    if(num === null || (typeof num !== 'number') || num < 0 || num >= 4) {
      return false;
    }
    
    return true;
  }
  
  var thisWeek = new weekTemps();
  
  var monthsAverage = thisWeek.monthlyAverage();
  console.log("Month average: " + monthsAverage);
  
  var aWeeksAverage = thisWeek.weeksAverage(0);
  console.log("Weeks average: " + aWeeksAverage);
  
  var allWeeks = thisWeek.allWeeksAverage();
  console.log('Week 1: ' + allWeeks.weekOne + '\nWeek 2: ' + allWeeks.weekTwo + '\nWeek 3: ' + allWeeks.weekThree + '\nWeek 4: ' + allWeeks.weekFour);