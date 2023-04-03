function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const slideElements = Array.from(carouselInner.querySelectorAll('.carousel__slide'));
  const carouselElement = document.querySelector('.carousel');
  const carouselArrowLeft = carouselElement.querySelector('.carousel__arrow_left');
  const carouselArrowRight= carouselElement.querySelector('.carousel__arrow_right');
  const carouselWidth = carouselInner.offsetWidth;
  const conditionChange = -carouselWidth * (slideElements.length - 1);
  let translateValue = undefined;

  function showButton(show, buttonElement) {
    if (show) {
      buttonElement.style.display = '';
    } else {
      buttonElement.style.display = 'none';
    }
  }

  function toggleButtonsInit() {
    if (translateValue === 0 || !Boolean(translateValue)) {
      showButton(true, carouselArrowRight);
      showButton(false, carouselArrowLeft);
    } else if (translateValue > conditionChange && translateValue !== 0) {
      showButton(true, carouselArrowRight);
      showButton(true, carouselArrowLeft);
    } else {
      showButton(false, carouselArrowRight);
      showButton(true, carouselArrowLeft);
    }
  }

  function translateX(translateValue) {
    carouselInner.style.transform = "translateX(" + translateValue + "px" + ")";
  }

  toggleButtonsInit();

  carouselArrowRight.addEventListener('click', () => {
    if (!Boolean(translateValue)) {
      translateValue = -carouselWidth;
      translateX(translateValue);
    } else {
      if (translateValue > conditionChange) {
        translateValue = translateValue - carouselWidth;
        translateX(translateValue);
      }
    }
    toggleButtonsInit();
  });

  carouselArrowLeft.addEventListener('click', () => {
    if (translateValue >= conditionChange && translateValue !== 0) {
      translateValue = translateValue + carouselWidth;
      translateX(translateValue);
    }
    toggleButtonsInit();
  });
}
