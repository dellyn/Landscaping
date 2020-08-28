const menu = document.querySelector(".menu-burger");
const menuItems = document.querySelector(".menu-items");
const menuBg = document.querySelector(".menu-bg");
const anchors = document.querySelectorAll("a.scrl-m");
const body = document.querySelector("body");
const lay = document.getElementById("lay");
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    if (!anchor.classList.contains("stop_toggleMenu")) {
      toggleMenu();
    }
    const blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    body.classList.remove("overflow-h");
    document.querySelector("html").classList.remove("overflow-h");
  });
}

// Menu for mobile
function toggleMenu() {
  menu.classList.toggle("fs");
  menuBg.classList.toggle("fs");
  menuItems.classList.toggle("fs");
  menu.textContent == "☰" ? (menu.textContent = "✕") : (menu.textContent = "☰");
  lay.classList.remove("dn");

  if (menu.classList.contains("fs")) {
    body.classList.add("overflow-h");
  } else {
    body.classList.remove("overflow-h");
  }
}
menu.addEventListener("click", toggleMenu);
document.getElementById("lay").onclick = function () {
  this.classList.add("dn");
  toggleMenu();
};
