const isPerfect = num => {
  let result = 0;
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) {
      result += i;
    }
  }
  if (result === num) {
    return true;
  } else {
    return false;
  }
};
let num = prompt("vvedite chislo", "");
document.write(isPerfect(Number(num)));
