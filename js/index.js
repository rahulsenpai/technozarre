const EVENT_DATE = new Date("May 4, 2023 23:59:59").getTime();

const setTime = () => {
  const timeNow = new Date().getTime();

  let days = Math.floor((EVENT_DATE - timeNow) / (1000 * 60 * 60 * 24));

  if (days < 0) days = "00";

  document.getElementById("countdown").innerHTML = days + " DAYS";
};

// Control state of hamburger menu
const hamButton = document.getElementById("hamburger-icon");
const closeButton = document.getElementById("hamburger-close-button");
const menu = document.getElementsByClassName("hamburger-menu")[0];
const hamItem = document.getElementsByClassName("ham-item");
menu.style.display = "none";

hamButton.addEventListener("click", _ => {
  menu.style.display = "flex";
  hamButton.className += " hidden";
  setTimeout(() => {
    menu.style.opacity = 1;
    for (let i = 0; i < hamItem.length; i++) {
      hamItem[i].style.animation =
        "slideIn 0.25s linear " + (0.4 + 0.1 * i) + "s forwards";
    }
  }, 50);
});

const closeHamMenu = _ => {
  hamButton.classList.remove("hidden");
  menu.style.opacity = 0;
  setTimeout(() => {
    menu.style.display = "none";
  }, 500);
}

closeButton.addEventListener("click", closeHamMenu);

let phrases = [];

let counter = 0;
const next = () => {
  counter = (counter + 1) % phrases.length;
};

const aboutUs = document.querySelector("#aboutUs > .heading > span");
const events = document.querySelector("#events > .heading > span");
const contact = document.querySelector("#contact > .heading > span");
const videos = document.querySelector("#videos > .heading > span");
const home = document.querySelector("#home .register-button");

let isAboutUsAnimated = false;
let isEventsAnimated = false;
let isContactAnimated = false;
let isVideoAnimated = false;

let activePage = "home";

const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener(
  "wheel",
  function (e) {
    if (isInViewport(aboutUs)) {
      if (!isAboutUsAnimated) {
        phrases = ["About Us"];
        isAboutUsAnimated = true;
        next();
      }
    }
    else if (isInViewport(contact)) {
      if (!isContactAnimated) {
        phrases = ["Contact Us"];
        isContactAnimated = true;
        next();
      }
    }
    else if (isInViewport(videos)) {
      if (!isVideoAnimated) {
        phrases = ["Videos"];
        isVideoAnimated = true;
        next();
      }
    }
    else if (isInViewport(events)) {
      if (!isEventsAnimated) {
        phrases = ["Events"];
        isEventsAnimated = true;
        next();
      }
    }
    else if (isInViewport(home)) {
    }
    else if (isInViewport(events)) {
      if (!isEventsAnimated) {
        phrases = ["Events"];
        isEventsAnimated = true;
        next();
      }
    }
  },
  false
);

window.addEventListener(
  "scroll",
  function (e) {
    if (isInViewport(aboutUs)) {
      if (!isAboutUsAnimated) {
        phrases = ["About Us"];
        isAboutUsAnimated = true;
        next();
      }
    }
    else if (isInViewport(contact)) {
      if (!isContactAnimated) {
        phrases = ["Contact Us"];
        isContactAnimated = true;
        next();
      }
    }
    else if (isInViewport(videos)) {
      if (!isVideoAnimated) {
        phrases = ["Videos"];
        isVideoAnimated = true;
        next();
      }
    }
    else if (isInViewport(home)) {
    }
    else if (isInViewport(events)) {
      if (!isEventsAnimated) {
        phrases = ["Events"];
        isEventsAnimated = true;
        next();
      }
    }
  },
  false
);

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

const navigateTo = id => {
  var element = document.getElementById(id);
  var headerOffset = vh(5);
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  closeHamMenu();

  if (id == "aboutUs") {
    if (!isAboutUsAnimated) {
      phrases = ["About Us"];
      isAboutUsAnimated = true;
      next();
    }
  }
  else if (id == "contact") {
    if (!isContactAnimated) {
      phrases = ["Contact Us"];
      isContactAnimated = true;
      next();
    }
  }
  else if (id == "videos") {
    if (!isVideoAnimated) {
      phrases = ["Videos"];
      isVideoAnimated = true;
      next();
    }
  }
  else if ((id = "events")) {
    if (!isEventsAnimated) {
      phrases = ["Events"];
      isEventsAnimated = true;
      next();
    }
  }
};

const openInNewTab = (url) => {
  window.open(url, "_blank");
}
document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden'
window.onload = () => {
  setTimeout(() => {
    document.getElementsByClassName("logo-container")[0].style.display = 'none'
    document.getElementsByTagName("BODY")[0].style.overflowY = ''
    document.getElementsByClassName("wrapper")[0].style.overflowY = 'auto'
    document.getElementById("loader").style.opacity = "0";
    document.getElementById("home").scrollIntoView({block: "end"});
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none'
    }, 1500)
    setTime();
  }, 5000);
};
