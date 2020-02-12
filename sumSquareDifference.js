const summaKvadratov = num => {
  result = 0;
  for (let i = 1; i <= num; i += 1) {
    result += i ** 2;
  }
  return result;
};
const kvadratSuumi = num2 => {
  result2 = 0;
  for (let j = 1; j <= num2; j += 1) {
    result2 += j;
  }
  return result2 ** 2;
};
const sumSquareDifference = num3 => {
  return kvadratSuumi(num3) - summaKvadratov(num3);
};
let num4 = prompt("vvedite chislo", "");
document.write(sumSquareDifference(Number(num4)));
