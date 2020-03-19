const isHappyTicket = num => {
  let result1 = 0;
  let result2 = 0;
  const dlinnastr = String(num).length;
  console.log(dlinnastr);
  if (dlinnastr % 2 !== 0) {
    return "eto ne bilet";
  }
  for (let i = 0; i < dlinnastr / 2; i += 1) {
    result1 += Number(String(num)[i]);
    console.log(result1);
  }
  for (let j = dlinnastr - 1; j >= dlinnastr / 2; j -= 1) {
    result2 += Number(String(num)[j]);
    console.log(result2);
  }
  if (result1 === result2) {
    return true;
  } else {
    return false;
  }
};
let str = prompt("vvedite vash bilet", "");
document.write(isHappyTicket(str));
