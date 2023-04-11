function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const divText = document.querySelector('#text');

  toggleTextButton.addEventListener('click', () => {
    divText.hidden = !divText.hidden;
  });
}
