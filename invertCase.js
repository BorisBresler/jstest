const invertCase = str => {
  let result = "";
  const strUp = str.toUpperCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === strUp[i]) {
      result = result + str[i].toLowerCase();
    } else {
      result = result + str[i].toUpperCase();
    }
  }
  return result;
};
let str = prompt("choose you str", "");
document.write(invertCase(str));
