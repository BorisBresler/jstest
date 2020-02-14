const fizzBuzz = (begin, end) => {
  let result = "";
  if (begin > end) {
    return "tak ne poydet";
  }
  for (let i = begin; i <= end; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      result += `Fizz `;
    } else if (i % 5 === 0 && i % 3 !== 0) {
      result += `Buzz `;
    } else if (i % 5 === 0 && i % 3 === 0) {
      result += `FizzBuzz `;
    } else {
      result += `${i} `;
    }
  }
  return result;
};
let begin = prompt("turn begin", "");
let end = prompt("turn end", "");
document.write(fizzBuzz(Number(begin), Number(end)));
