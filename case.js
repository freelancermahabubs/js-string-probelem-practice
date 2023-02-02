const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLocaleLowerCase());
console.log(userInput.toUpperCase ());

if(userName.toLocaleLowerCase === userInput.toLocaleLowerCase){
  console.log('valid user');
}
else{
  console.log('invalid user');
}