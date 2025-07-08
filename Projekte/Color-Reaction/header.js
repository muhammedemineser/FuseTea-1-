 const headerBg = document.getElementById("a");
    const header = document.getElementById("b");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        headerBg.classList.add("s");
        header.classList.add("s");
      } else {
        headerBg.classList.remove("s");
        header.classList.remove("s");
      }
    });


const container = document.getElementById("g");
const menu = document.getElementById("h");

let isHovered = false;
let isFixed = false;

container.addEventListener("mouseover", () => {
  if (!isFixed) {
    menu.classList.add("t");
  }
  isHovered = true;
});

container.addEventListener("mouseleave", () => {
  if (!isFixed) {
    menu.classList.remove("t");
  }
  isHovered = false;
});

let isClicked = 0;

container.addEventListener("click", () => {
  if (isClicked %2 === 0) {
    isFixed = true;
    menu.classList.add("t");
    isClicked++;
  }
  else {
    isFixed = false;
    menu.classList.remove("t");
    isClicked++;
  }
});

const searchContainer = document.getElementById("d");
const searchMenu = document.getElementById("f");

let searchIsHovered = false;
let searchIsFixed = false;

searchContainer.addEventListener("mouseover", () => {
  if (!searchIsFixed) {
    searchMenu.classList.add("t");
  }
  searchIsHovered = true;
});

searchContainer.addEventListener("mouseleave", () => {
  if (!searchIsFixed) {
    searchMenu.classList.remove("t");
  }
  searchIsHovered = false;
});

let searchIsClicked = 0;

searchContainer.addEventListener("click", () => {
  if (searchIsClicked %2 === 0) {
    searchIsFixed = true;
    searchMenu.classList.add("t");
    searchIsClicked++;
  }
  else {
    searchIsFixed = false;
    searchMenu.classList.remove("t");
    searchIsClicked++;
  }
});
