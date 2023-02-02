// function maxInArray(numbers){
//   let largest = numbers[0];
//   for(let i = 0; i < numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     if(element > largest){
//       largest = element
//     }
//   }
//   return largest;

// }
// let heights = [167, 190, 120, 165, 137, 265];
// const tallest = maxInArray(heights);
// console.log('tallest person is:', tallest);

function tallNumInArray(numbers){
  let largest = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element > largest){
      largest = element;
    }

  }
  return largest

}
// let heights = [45, 68, 256, 2589, 458, 2414, 45532, 784];
// let tallest = tallNumInArray(heights);
// console.log(tallest);


function lowestNum(numbers) {
  let lowest = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < lowest){
      lowest = numbers[i];
    }
  }
  return lowest
}
let lowest = [45, 68, 256, 2589, 458, 2414, 45532, 784];
let result = lowestNum(lowest);
console.log(result);
