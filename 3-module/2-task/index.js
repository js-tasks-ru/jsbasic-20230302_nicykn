function filterRange(arr, a, b) {
  const arrFiltered = arr.filter((el) => {
    if (el <= b && el >= a) {
      return el;
    }
  });
  return arrFiltered;
}
