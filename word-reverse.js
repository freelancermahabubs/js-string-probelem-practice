/*
function reversedWords(str){
  const words = str.split(' ');
  const result = [];
  // [ 'I', 'am', 'a', 'Good', 'Boy' ]
  for(let i = words.length -1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  console.log(result);

}


const myString = 'I am a Good Boy';
reversedWords(myString); */

function reversedWords(str){
  let words = str.split(' ');
  const result = [];
  for(let i = words.length -1; i >= 0; i--){
    const element = words[i];
    result.push(element);
  }
  console.log(result);
  const reversed = result.join(' ');
  return reversed;

}

const myString = 'I am a Mahaub and I am Freelancer';
reversedWords(myString);


