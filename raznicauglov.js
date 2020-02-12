const diff = (ugol1, ugol2) => {
  result = 0;
  if (Math.abs(ugol1 - ugol2) < 180) {
    result = Math.abs(ugol1 - ugol2);
  } else {
    result = 360 - Math.abs(ugol1 - ugol2);
  }
  return result;
};
let ugol1 = prompt("choose you first ugol", "");
let ugol2 = prompt("choose you second ugol", "");

alert("minimum difference of angles on a circle");
alert(diff(Number(ugol1), Number(ugol2)));
if (diff(ugol1, ugol2) > 90) {
  document.write("Ti tupoy pidor");
}
if (diff(ugol1, ugol2) === 90) {
  document.write("Ti prymoi pidor");
}
if (diff(ugol1, ugol2) < 90) {
  document.write("Ti ostryi pidor");
}
document.write("\nFaggot by JS");
