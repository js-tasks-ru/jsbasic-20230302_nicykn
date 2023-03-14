function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// или через Object.keys(object).length;
