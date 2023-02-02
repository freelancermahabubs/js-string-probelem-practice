function findLeapYear(year){
  const result = [];
  for(let i = 0; i < year.length; i++){
    const index = i;
    const element = year[index];
    if(((element % 4 == 0) && (element % 100 != 0)) || (element % 400 == 0)) {
      result.push(element);
    }
  }
  return result;

}

let leapYear = [2023,2024,2025,2028,2030];
 console.log(findLeapYear(leapYear));

//  tallest number finds

function tallestNum(number) {
  let talleste = [];
  let tallest = number[0]
  for(let i = 0; i < number.length; i++) {
    if(number[i] > tallest){
      tallest == number[i];
      talleste.push(number[i]);
    }
  }
  return talleste
}
const numbers = [157,  134,  188 ];
let results = tallestNum(numbers);
console.log(results);

// find lowes number in the array

function lowest(number){

  let result = number[0];
for(let i = 0; i < number.length; i++) {

  if(number[i] < result){
  result = number[i];
}
}
  return result;
}

let myNumber = [45555, 54412, 458855, 455211, 78828, 78841];
let lowesNum = lowest(myNumber);
console.log(lowesNum);



// max.js

let mahaub = 78;
let robin = 85;
if(mahaub > robin){
  console.log('Mahaub is Max:')
}
else{
  console.log('robin is max');
}
//  case js 
const userName = 'mahaub alom';
const userInput = 'maHabub';
console.log(userName.toUpperCase());
console.log(userInput.toLowerCase());

if(userName.toUpperCase === userInput.toLowerCase){
  console.log('username is valid')
}
else{
  console.log('userInput is valid');
}

// reverse js

function reverseString(text) {
  let reversed = '';
  for(let i = text.length -1; i >= 0; i--){
    const element = text[i];
    reversed = reversed + element;
    console.log(element, reversed);
  }
  return reversed
}

let mySting = 'Mahaub alom is good boy';
reverseString(mySting);

// words reverse


function reversedWords(str) {
  let words = str.split(' ');
  let result = [];
  for(let i = words.length -1; i >= 0; i--){
    const element = words[i];
    // console.log(element);
    result.push(element)

  }
  console.log(result);
  const reversed = result.join(' ');
  return reversed;
}
const myString = 'I am a Mahaub and I am Freelancer';
reversedWords(myString);

// temp js 
let first = 45;
let second = 47;
console.log(first, second);

// this is wrong approch
let temp = first;
first = second;
second = temp;
// console.log(first, second);

// approach: 2 --- Destructuring

[ first, second ] = [ second, first ];
console.log(first, second);

// join js 
const lines = [
  'Tumi bondhu kala Pakhi ami jeno ki',
  'Bosonto kale tomai bolte pari nai',
  'Kala kala sada sada ',
  'Rong jomece sada kala',
];

const newSong = lines.join('.');
console.log(newSong);

