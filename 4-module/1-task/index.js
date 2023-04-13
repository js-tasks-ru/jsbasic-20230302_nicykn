function makeFriendsList(friends) {
  const templateUlElement = document.createElement('ul');
  friends.forEach(el => {
    const {firstName, lastName} = el;
    const templateLiElement = document.createElement('li');
    templateLiElement.textContent = `${firstName} ${lastName}`;
    templateUlElement.append(templateLiElement);
  });
  return templateUlElement;
}
