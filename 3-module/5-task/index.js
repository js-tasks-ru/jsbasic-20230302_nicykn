function getMinMax(str) {
  const arrNum = new Array();
  str.split(' ').filter((el) => {
    if (Boolean(+el)) {
      arrNum.push(+el);
    }
  });
  const minMax = {
    min: arrNum[0],
    max: arrNum[0]
  };
  arrNum.forEach((el) => {
    if (el < minMax.min) {
      minMax.min = el;
    }
    if (el > minMax.max) {
      minMax.max = el;
    }
  });
  return minMax;
}
