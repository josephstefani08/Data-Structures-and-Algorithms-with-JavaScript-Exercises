/* Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average. */

/*
SN xplore did not like this version of class
class Grades {
    constructor(grades) {
        this.addGrade = grade;
        this.grades = [];
        this.average = average;
    }
}
*/

function Grades() {
    this.addGrade = addGrade;
    this.grades = [];
    this.average = average;
}

function addGrade(grade) {
    this.grades.push(grade);
    return;
}

function average() {
    var gradeAverage = 0;

    for (var i = 0; i < this.grades.length; i++) {
        gradeAverage += this.grades[i];
    }

    return Math.round(gradeAverage / this.grades.length);
}

/*
var joseph = new Grades();
joseph.addGrade(89);
joseph.addGrade(91);
joseph.addGrade(94);

var theAverage = joseph.average();
gs.log(theAverage);
*/