const formattedTime = minuta => {
  const chas = Math.floor(minuta / 60);
  const minuta2 = minuta % 60;
  let result1 = "";
  let result2 = "";
  if (chas < 10) {
    result1 = `0${chas}:`;
  } else {
    result1 = `${chas}:`;
  }
  if (minuta2 < 10) {
    result2 = `0${minuta2}`;
  } else {
    result2 = `${minuta2}`;
  }
  return result1 + result2;
};
let minuta = prompt("vvedite kol-vo minut s nachala dnya", "");
document.write("vremy seychas ");
document.write(formattedTime(Number(minuta)));
