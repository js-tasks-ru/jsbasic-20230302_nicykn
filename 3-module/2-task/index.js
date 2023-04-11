function filterRange(arr, a, b) {
  return arr.filter((el) => {
    return el <= b && el >= a;
  });
}
