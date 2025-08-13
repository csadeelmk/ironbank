var ShoudShowScrollDown = true;
var MenuOpen = false;


const year = new Date().getFullYear();
const time = document.getElementById("time");
const scrollBottom = document.getElementById("scroll-down");
const carroussel = document.querySelector(".carousel-container");
const openFile = document.getElementById("open-file");
const file = document.getElementById("file");
const menuButton = document.getElementById("menu-button");
const body = document.querySelector("body");
const modalmenu = document.getElementById("modal-menu");
const header = document.getElementById("main-header");
const menuIcon1 = document.getElementById("menu-icon-1");
const menuIcon2 = document.getElementById("menu-icon-2");

function closeMenu() {
  MenuOpen = false;
  body.classList.remove("overflow-hidden");
  modalmenu.classList.add("opacity-0");
  modalmenu.classList.add("pointer-events-none");
  modalmenu.classList.remove("pointer-events-auto");
  modalmenu.classList.remove("opacity-100");

  menuIcon1.classList.remove("opacity-0");
  menuIcon1.classList.add("opacity-100");
  menuIcon2.classList.add("opacity-0");
  menuIcon2.classList.remove("opacity-100");

  modalmenu.style.top = "0px";
}

menuButton.addEventListener("click", function () {
  MenuOpen = !MenuOpen;
  if (MenuOpen) {
    body.classList.add("overflow-hidden");
    modalmenu.classList.add("opacity-100");
    modalmenu.classList.remove("opacity-0");
    modalmenu.classList.remove("pointer-events-none");
    modalmenu.classList.add("pointer-events-auto");

    const scrollfromtop = document.documentElement.scrollTop || document.body.scrollTop;
    modalmenu.style.top = `${scrollfromtop}px`;

    menuIcon1.classList.add("opacity-0");
    menuIcon1.classList.remove("opacity-100");
    menuIcon2.classList.remove("opacity-0");
    menuIcon2.classList.add("opacity-100");
  } else {
    closeMenu()
  }
});

openFile.addEventListener("click", function () {
  file.click()
});

time.innerHTML = `© ${year} Iron Bank Capital. All Right Reserved`;

var showScrollDown = false;
setInterval(() => {
  if (!ShoudShowScrollDown) return

  if (showScrollDown) {
    scrollBottom.classList.add("opacity-0");
    scrollBottom.classList.remove("opacity-100");
  } else {
    scrollBottom.classList.remove("opacity-0");
    scrollBottom.classList.add("opacity-100");
  }
  showScrollDown = !showScrollDown;
}, 5000);


const carrousselData = document.querySelector(".carousel-content").innerHTML;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.remove();
      carroussel.innerHTML = carroussel.innerHTML + `<div class="carousel-content flex infinite-scroll py-4" aria-hidden="true">${carrousselData}</div>`;
    }
  });
}, {
  threshold: 0.1 // 10% visível já conta como "visível"
});


document.querySelectorAll(".carousel-content").forEach((item) => {
  observer.observe(item);
});


window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    ShoudShowScrollDown = false;
    header.classList.add("scrolled-header");
    scrollBottom.classList.add("opacity-0");
    scrollBottom.classList.remove("opacity-100");
  } else {
    ShoudShowScrollDown = true;
    header.classList.remove("scrolled-header");
    scrollBottom.classList.remove("opacity-0");
    scrollBottom.classList.add("opacity-100");
  }
});

if (window.scrollY > 30) {
  scrollBottom.classList.add("opacity-0");
  ShoudShowScrollDown = false;
  header.classList.add("scrolled-header");
  scrollBottom.classList.remove("opacity-100");
}