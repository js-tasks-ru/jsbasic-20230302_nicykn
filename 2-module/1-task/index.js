function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    if (typeof(salaries[key]) === "number" && Boolean(parseInt(salaries[key]))) {
      sum = sum + salaries[key];
    }
  }
  return sum;
}
