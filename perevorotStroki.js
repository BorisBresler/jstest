const perevorotStroki = str => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += `${str[i]}`;
  }
  return result;
};
let str = prompt("vvedite stroku kotoruy xotite perevenut", "");
document.write(perevorotStroki(str));
