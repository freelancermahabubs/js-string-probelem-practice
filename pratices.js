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

