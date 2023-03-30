function namify(users) {
  const userName = users.map((el) => {
    const { name } = el;
    return name;
  });
  return userName;
}
