const ackerman = (m, n) => {
  let result = 0;
  if (m === 0) {
    result = n + 1;
  } else if (m > 0 && n === 0) {
    result = ackerman(m - 1, 1);
  } else if (m > 0 && n > 0) {
    result = ackerman(m - 1, ackerman(m, n - 1));
  }
  return result;
};
let m = prompt("choose m", "");
let n = prompt("choose n", "");
document.write(ackerman(Number(m), Number(n)));
