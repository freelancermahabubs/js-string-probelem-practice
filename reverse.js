// function reverseString(text) {
//   for(let i = text.length -1; i >= 0; i--) {
//     const element = text[i];
//     console.log(element);
//   }
// }
// const mySting = 'I am a good boy';
// const reversed = reverseString(mySting);

function reverseString(text){
  let reversed = '';
  for(let i = text.length-1; i >= 0; i--){
    const element = text[i];
    reversed += element;
    console.log(element, reversed);

  }
  return reversed
}
const mySting = 'Mamahabub is a good boy in this world';
const reversed = reverseString(mySting);
console.log(reversed);