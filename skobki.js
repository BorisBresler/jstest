const areBracketsBalanced = str => {
  let result = 0;
  if (str === "") {
    return "";
  }
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "(") {
      result += 1;
    } else if (str[i] === ")") {
      result -= 1;
    }
    if (result < 0) {
      return false;
    }
  }
  if (result === 0) {
    return true;
  } else {
    return false;
  }
};
let str2 = prompt(
  "enter a sentence to verify that the brackets are correct.",
  ""
);
document.write(areBracketsBalanced(str2));
