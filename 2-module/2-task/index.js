function isEmpty(obj) {
  let count = 0;
  for (let key in obj) {
    [].push(key).length;
    count++;
    break;
  }
  return !Boolean(count);
}

// или через Object.keys(object).length;
