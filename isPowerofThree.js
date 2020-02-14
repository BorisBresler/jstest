const delimNaThree = num => {
  return num / 3;
};
const isPowerOfThree = num => {
  let result = 0;
  if (num === NaN || num === 0) {
    return "nu ti ebobo";
  }
  if (delimNaThree(num) > 1) {
    result = isPowerOfThree(delimNaThree(num));
  } else if (delimNaThree(num) === 1) {
    result = true;
  } else if (delimNaThree(num) < 1) {
    result = false;
  }
  return result;
};
let num = prompt("vvedite chislo", "");
document.write(isPowerOfThree(Number(num)));
