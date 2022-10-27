import { KoreanIMEString } from "./TypedKorean.js";
import Typed from "/node_modules/typed.js/src/typed.js";
import "./navbar.js"

let options = {
  stringsElement: "#intro-strings",
  typeSpeed: 60,
  loop: true,
  shuffle: true,
  smartBackspace: false,
  backSpeed: 40,
  backDelay: 3000,
};

const observerOptions = {
  threshold: 1
}

let typed = new Typed("#intro", options);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      typed.start();
      return;
    }
    typed.stop();
  });
}, observerOptions);

observer.observe(document.querySelector('.intro-tophalf'));