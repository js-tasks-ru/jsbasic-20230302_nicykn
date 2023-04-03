function hideSelf() {
  const btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', (ev) => {
    ev.target.hidden = true;
  });
}
