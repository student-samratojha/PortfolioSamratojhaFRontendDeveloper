function worddecotiver() {
  let words = document.querySelectorAll(".word");
  words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";
      word.append(span);
    });
  });
  let currentWordIndex = 0;
  let maxWordIndex = words.length - 1;
  words[currentWordIndex].style.opacity = "1";
  let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
      currentWordIndex === maxWordIndex
        ? words[0]
        : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.className = " letter-out";
      }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
      letter.className = "letter-behind";
      setTimeout(() => {
        letter.className = "letter-in";
      }, 340 + i * 80);
    });
    currentWordIndex =
      currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };
  changeText();
  setInterval(changeText, 3000);
}
worddecotiver();
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();
function scrollTriggerAnimation() {
  gsap.to(".logo span", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".home",
      scroller: "#main",
      start: "top 0",
      end: "top -11%",
      scrub: true,
    },
  });
  gsap.to(".navlist", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".home",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
scrollTriggerAnimation();
function cursorAnimation() {
  document.addEventListener("mousemove", function (dats) {
    gsap.to("#cursor", {
      left: dats.x,
      top: dats.y,
      scale: "1",
    });
  });
}
cursorAnimation();
function openmenu() {
  let nav = document.querySelector(".nav");
  nav.style.display = "flex";
  setTimeout(() => {
    nav.style.display = "none";
  }, 4000);
}
function skils() {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((elem) => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
      points += `<div class="points"style="--i:${i};--rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
      pointsMarked[i].classList.add("marked");
    }
  });
}
skils();
function projectswitcher() {
  let swp = document.querySelector("#swp");
  let swa = document.querySelector("#swa");
  let swc = document.querySelector("#swc");
  let swpB = document.querySelector(".swpB");
  let swaB = document.querySelector(".swaB");
  let swcB = document.querySelector(".swcB");
  swpB.addEventListener("click", () => {
    swpB.style.color = "#0a0a0a";
    swaB.style.color = "#08fae6";
    swcB.style.color = "#08fae6";
    swp.style.display = "block";
    swc.style.display = "none";
    swa.style.display = "none";
    setTimeout(() => {
      swp.style.display = "none";
      swpB.style.color = "#08fae6";
    }, 5000);
  });
  swcB.addEventListener("click", () => {
    swcB.style.color = "#0a0a0a";
    swaB.style.color = "#08fae6";
    swpB.style.color = "#08fae6";
    swc.style.display = "block";
    swp.style.display = "none";
    swa.style.display = "none";
    setTimeout(() => {
      swc.style.display = "none";
      swcB.style.color = "#08fae6";
    }, 5000);
  });
  swaB.addEventListener("click", () => {
    swaB.style.color = "#0a0a0a";
    swpB.style.color = "#08fae6";
    swcB.style.color = "#08fae6";
    swa.style.display = "block";
    swc.style.display = "none";
    swp.style.display = "none";
    setTimeout(() => {
      swa.style.display = "none";
      swaB.style.color = "#08fae6";
    }, 5000);
  });
}
projectswitcher();