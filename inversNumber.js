const reversNumber = num => {
  let result = "";
  const numStr = String(num);
  if (num < 0) {
    for (let i = numStr.length - 1; i > 0; i -= 1) {
      result += numStr[i];
    }
    return -result;
  } else {
    for (let j = numStr.length - 1; j >= 0; j -= 1) {
      result += numStr[j];
    }
  }
  return result;
};
let num2 = prompt("vvedite chislo", "");
document.write(reversNumber(Number(num2)));
