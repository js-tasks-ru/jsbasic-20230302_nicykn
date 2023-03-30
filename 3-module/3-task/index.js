function camelize(str) {
  let arrSymbols = [...str];
  const res = arrSymbols.reduce((prev, el, i) => {
    if (el === '-') {
      if (arrSymbols[i + 1]) {
        arrSymbols[i + 1] = arrSymbols[i + 1].toUpperCase();
      }
    } else {
      prev = prev + el;
    }
    return prev;
  }, '');
  return res;
}
