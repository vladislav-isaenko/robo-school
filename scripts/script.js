const menuLinks = document.querySelectorAll(".menu-item a");

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = event.target.dataset.link;

    if (target) {
      const targetSection = document.querySelector(`.${target}`);

      if (targetSection) {
        scrollToSection(targetSection);
      }
    }
  });
});

function scrollToSection(section) {
  const sectionPosition = section.offsetTop;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
}

const subscribeButton = document.querySelector(".main-action");

subscribeButton.addEventListener("click", () => {
  const targetSection = document.querySelector(`.costs`);

  if (targetSection) {
    scrollToSection(targetSection);
  }
});

const trainersActions = document.querySelectorAll(".trainers-item-about");
const allTrainersCards = document.querySelectorAll(".trainer-card-content");
const trainersCards = document.querySelector(".trainers-cards");

trainersActions.forEach((action, index) => {
  action.addEventListener("click", () => {
    const actionId = action.getAttribute("id");
    const cardId = `trainer-card-${actionId.split("-")[2]}`;
    const card = document.getElementById(cardId);

    clearScreenFromCards();
    removeControlsActive();
    card.querySelector(".trainer-card-control").classList.add("active");
    card.querySelector(".card-content").classList.add("active");

    card.classList.add("active");
    trainersCards.classList.add("active");
  });
});

const closeButton = document.querySelectorAll(".close");

closeButton.forEach((button) =>
  addEventListener("click", () => {
    button.addEventListener("click", () => {
      clearScreenFromCards();
    });
  })
);

function clearScreenFromCards() {
  trainersCards.classList.remove("active");
  removeControlsActive();
  allTrainersCards.forEach((singleCard) => {
    singleCard.classList.remove("active");
  });
}

const controlElements = document.querySelectorAll(".trainer-card-control");
const contentElements = document.querySelectorAll(".card-content");

controlElements.forEach((controlElement) => {
  controlElement.addEventListener("click", (event) => {
    removeControlsActive();
    controlElement.classList.add("active");
    const contentElement = document.getElementById(
      controlElement.getAttribute("data-card-content-id")
    );
    contentElement.classList.add("active");
  });
});

function removeControlsActive() {
  controlElements.forEach((control) => control.classList.remove("active"));
  contentElements.forEach((content) => content.classList.remove("active"));
}

const trainersItems = document.querySelector(".trainers-items");
const sliderBarThumb = document.querySelector(".slider-bar-thumb");
const sliderButtonLeft = document.querySelector(".slider-button-left");
const sliderButtonRight = document.querySelector(".slider-button-right");
const maxTranslateX =
  document.querySelector(".slider-bar").offsetWidth -
  sliderBarThumb.offsetWidth;
let positionLeft = true;

sliderButtonLeft.addEventListener("click", () => {
  sliderBarThumb.style.transform = "translateX(0)";
  trainersItems.style.transform = "translateX(0)";
  positionLeft = true;
});

sliderButtonRight.addEventListener("click", () => {
  sliderBarThumb.style.transform = `translateX(${maxTranslateX}px)`;
  trainersItems.style.transform = "translateX(-420px)";
  positionLeft = false;
});

sliderBarThumb.addEventListener("click", () => {
  if (!positionLeft) {
    trainersItems.style.transform = "translateX(0)";
    sliderBarThumb.style.transform = `translateX(0)`;
    positionLeft = true;
  } else {
    trainersItems.style.transform = "translateX(-420px)";
    sliderBarThumb.style.transform = `translateX(${maxTranslateX}px)`;
    positionLeft = false;
  }
});

const costsButtons = document.querySelectorAll(".costs-items button");

costsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetSection = document.querySelector(".order");

    if (targetSection) {
      scrollToSection(targetSection);
    }
  });
});

let name = document.getElementById("name");
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
document.getElementById("order-form-button").onclick = function () {
  let hasError = false;

  [name, phone, mail].forEach((item) => {
    if (!item.value) {
      hasError = true;
    }
  });

  if (!hasError) {
    [name, phone, mail].forEach((item) => {
      item.value = "";
    });
    alert("Спасибо за вашу заявку! Мы скоро свяжемся с вами!");
  }
};
