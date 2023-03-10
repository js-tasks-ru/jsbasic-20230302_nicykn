function factorial(n) {
  let res = (n === 0)? 1 :0;
  for (let i = n; i > 0; i--) {
		if (i === n) {
      res = i;
    } else {
      res = res * i;
    }
  }
  return res;
}
