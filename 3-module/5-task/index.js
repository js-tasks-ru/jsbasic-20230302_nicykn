function getMinMax(str) {
  const arrNum = new Array();
  str.split(' ').filter((el) => {
    if (Boolean(+el)) {
      arrNum.push(+el);
    }
  });
  const minMaxObj = { min: null, max: null };
  arrNum.reduce((prev, el, i) => {
    if (el < prev) {
      if (i === 1) {
        minMaxObj.min = el;
        minMaxObj.max = prev;
      } else if (el < minMaxObj.min) {
        minMaxObj.min = el;
      } else if (prev > minMaxObj.max) {
        minMaxObj.max = prev;
      }
    } else {
      if (i === 1) {
        minMaxObj.min = prev;
        minMaxObj.max = el;
      } else if (prev < minMaxObj.min) {
        minMaxObj.min = prev;
      } else if (el > minMaxObj.max) {
        minMaxObj.max = el;
      }
    }
    return prev = el;
  });
  return minMaxObj;
}
