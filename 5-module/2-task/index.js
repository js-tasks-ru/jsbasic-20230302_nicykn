function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const divText = document.querySelector('#text');

  toggleTextButton.addEventListener('click', () => {
    if (divText.hasAttribute("hidden")) {
      divText.removeAttribute("hidden");
    } else {
      divText.setAttribute("hidden", "hidden");
    }
  });
}
