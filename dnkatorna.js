const dnkaToRnka = dnka => {
  if (dnka === "") {
    return "";
  }
  let result = "";
  for (let i = 0; i < dnka.length; i += 1) {
    switch (dnka[i]) {
      case "G":
        result = `${result}C`;
        break;
      case "C":
        result = `${result}G`;
        break;
      case "T":
        result = `${result}A`;
        break;
      case "A":
        result = `${result}U`;
        break;
      default:
        return "Eto ne DNKA";
    }
  }
  return result;
};
let dnka = prompt("choose you dnka", "");
document.write(dnkaToRnka(dnka));
