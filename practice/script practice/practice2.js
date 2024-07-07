//  arrays.js
const steps = ["one", "two", "three"];

const listTemplate = (step) => {
  return `<li>[step]</li>`;
}

const stepsHtml = steps.map((listTemplate).join(""));// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml;  // set the innerHTML

const letterGrades = ['A','B','A'];

function convertGradeToPoins(grade) {
  let points = 0;
  if (grade === "A")
  {
    points = 4;
  }
  else if (grade === "B")
  {
    points = 3;
  }
  return points

} 

const gpaArray = letterGrades.map(convertGradeToPoins);

console.log(gpaArray);

const totalPoints = gpaArray.reduce((total, point)=> total + point,0)

const GPA = totalPoints / gpaArray.length

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

function filterFruits(fruit)
{
  return fruit.length > 6;
}

const filteredFruits = fruits.filter(filterFruits)

const numbers = [12, 34, 21, 54];

const luckyNumber = 21;

const luckyIndex = numbers.indexOf(luckyNumber);