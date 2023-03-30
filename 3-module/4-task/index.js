function showSalary(users, age) {
  const inputAge = age;
  const resStr = users.reduce((prev, el, i) => {
    const { name, balance, age } = el;
    if (age <= inputAge) {
      if (i !== users.length - 1) {
        prev = prev + `${name}, ${balance}\n`;
      } else {
        prev = prev + `${name}, ${balance}`;
      }
    }
    return prev;
  }, '');
  return resStr.trimEnd();
}
