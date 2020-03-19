const withoutTwoZeros = (nuli, edenici) => {
  let result = 1;
  let result1 = 1;
  while (edenici > nuli + 1) {
      result *=2; 
      edenici -=1;
  }
    } else if (nuli < 1 && edenici > 0) {
      result *= 1;
    } else if (edenici > 0 && nuli > 0) {
      result *= withoutTwoZeros(nuli, edenici - 1);
    }
  }
  for (edenici; edenici > 0; edenici -= 1) {
    if (edenici < 1 && nuli < 1) {
      result1 = 0;
    } else if (nuli < 1 && edenici > 0) {
      result1 *= 1;
    } else if (edenici > 0 && nuli > 0) {
      result1 *= 2;
    }
  }
  return result1 + result;
};
