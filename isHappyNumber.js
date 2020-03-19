const sumOfSquareDigits = num => {
  const stringNum = String(num);
  let result = 0;
  for (let i = 0; i < stringNum.length; i += 1) {
    result += Number(stringNum[i]) ** 2;
  }
  return result;
};
const isHappyNumber = num2 => {
  let i = 10;
  let result = 0;
  while (i > 0) {
    result = sumOfSquareDigits(num2);
    console.log(result);
    if (result === 1) {
      return true;
    } else {
      num2 = sumOfSquareDigits(result);
    }
    i -= 1;
  }
  return false;
};
let num2 = prompt("vvedite chislo dlay proverki", "");
document.write(isHappyNumber(Number(num2)));
