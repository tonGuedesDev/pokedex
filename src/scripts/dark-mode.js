function darkmode() {
  const buttonDark = document.querySelector(".dark-mode_button");
  const divDark = document.querySelector(".dark-mode");

  divDark.addEventListener("click", () => {
    const atribute = window.getComputedStyle(divDark);

    if (atribute.justifyContent === "flex-start") {
      divDark.style.justifyContent = "flex-end";
      blackColor();
    } else {
      divDark.style.justifyContent = "flex-start";
      whiteColor();
    }
  });
}

function blackColor() {
  const header = document.querySelector("header");
  const cards = document.querySelectorAll("#card");
  const body = document.querySelector("body");

  header.classList.add("dark-header");
  body.classList.add("dark-body");

  for (const card of cards) {
    card.classList.add("dark-card");
  }
}

function whiteColor() {
  const header = document.querySelector("header");
  const cards = document.querySelectorAll(".container div");
  const body = document.querySelector("body");

  header.classList.remove("dark-header");
  body.classList.remove("dark-body");
  header.classList.add("header");

  for (const card of cards) {
    card.classList.remove("dark-card");
  }
}

darkmode();
