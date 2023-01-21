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

// Force Page To Load On X 0 (It's On Before Unload)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
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
    // Old Solution ================================================================================================

    // if (
    //   document.getElementById("changeH4").textContent === "David Martino Co"
    // ) {
    //   document.getElementById("changeP").innerHTML = "CEO of David Company";
    // } else if (
    //   document.getElementById("changeH4").textContent === "Jake Harris Nyo"
    // ) {
    //   document.getElementById("changeP").innerHTML = "CTO of Digital Company";
    // } else if (
    //   document.getElementById("changeH4").textContent === "May Catherina"
    // ) {
    //   document.getElementById("changeP").innerHTML = "Founder of Catherina Co.";
    // } else if (
    //   document.getElementById("changeH4").textContent === "Random User"
    // ) {
    //   document.getElementById("changeP").innerHTML = "Manager, Digital Company";
    // } else if (
    //   document.getElementById("changeH4").textContent === "Mark Amber Do"
    // ) {
    //   document.getElementById("changeP").innerHTML = "CTO, Amber Do Company";
    // }

    // Old Solution ================================================================================================

    let changeState = document.getElementById("changeH4").innerHTML
    let changeState2 = document.getElementById("changeP").innerHTML
    switch(changeState){
      case "David Martino Co":
        changeState2 = "CEO of David Company"
        break;
      case "Jake Harris Nyo":
        changeState2 = "CTO of Digital Company"
        break;
      case "May Catherina":
        changeState2 = "Founder of Catherina Co."
        break;
      case "Random User":
        changeState2 = "Manager, Digital Company"
        break;
      case "Mark Amber Do":
        changeState2 = "CTO, Amber Do Company"
        break;
    }

    document.querySelector(".client .opinion").classList.add("change-state");
    setTimeout(() => {
      document
        .querySelector(".client .opinion")
        .classList.remove("change-state");
    }, 800);
  });
});
