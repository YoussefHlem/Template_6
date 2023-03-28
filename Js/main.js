// Preloader
window.addEventListener("load", function () {
  document.getElementById("preload").style.display = "none";
});
// Toggle Menu
let btn = document.querySelector(".our-bars");
let btn2 = document.querySelector(".fa-x");
let links = document.querySelector(".links");

btn.onclick = function () {
  links.classList.toggle("active");
  if (btn.classList.contains("fa-bars")) {
    this.classList.remove("fa-bars");
    this.classList.add("fa-x");
  } else if (btn.classList.contains("fa-x")) {
    this.classList.remove("fa-x");
    this.classList.add("fa-bars");
  }
};

// Click AnyWhere To Off Menu
let linksLi = document.querySelector(".links li");
let linksLiA = document.querySelector(".links li a");

document.addEventListener("click", (e) => {
  if (
    e.target !== btn &&
    e.target !== links &&
    e.target !== linksLi &&
    e.target !== linksLiA
  ) {
    if (links.classList.contains("active")) {
      links.classList.toggle("active");
    }
  }
});

// Stop Propagation On Menu
links.onclick = function (e) {
  e.stopPropagation();
};

// Heading Animation On Scroll
let heading = document.querySelector(".special");

window.onscroll = function () {
  if (window.scrollY >= heading.scrollHeight + 150) {
    heading.classList.add("active");
    document.querySelector("nav").classList.add("active");
  }
  if (window.scrollY <= heading.scrollHeight) {
    document.querySelector("nav").classList.remove("active");
  }
};

// Change State
let client = document.querySelectorAll(".click");
client.forEach((e) => {
  e.addEventListener("click", (a) => {
    a.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    a.target.classList.add("active");
    document.querySelector(".client .opinion .quote q").innerHTML =
      e.dataset.text;
    document.getElementById("changeH4").innerHTML = document.querySelector(
      ".client .rates .rate.active .box h4"
    ).textContent;

    let changeH4 = document.getElementById("changeH4");
    let changeP = document.getElementById("changeP");

    if (changeH4.textContent === "David Martino Co") {
      changeP.innerHTML = "CEO of David Company";
    } else if (changeH4.textContent === "Jake Harris Nyo") {
      changeP.innerHTML = "CTO of Digital Company";
    } else if (changeH4.textContent === "May Catherina") {
      changeP.innerHTML = "Founder of Catherina Co.";
    } else if (changeH4.textContent === "Random User") {
      changeP.innerHTML = "Manager, Digital Company";
    } else if (changeH4.textContent === "Mark Amber Do") {
      changeP.innerHTML = "CTO, Amber Do Company";
    }

    document.querySelector(".client .opinion").classList.add("change-state");
    setTimeout(() => {
      document
        .querySelector(".client .opinion")
        .classList.remove("change-state");
    }, 800);
  });
});
