import Typed from "/node_modules/typed.js/src/typed.js"
// import {gksdud, reverseGksdud} from "/gksdud/lib/gksdud.js"

let options = {
    strings: ["Hola", "Hello", "Bonjour", "こんにちは", "안녕하세요"],
    typeSpeed: 60,
    // stringsElement: '#intro-strings',
    loop: true,
    shuffle: true,
    preStringTyped: preStringTyped,
    onStart: (c) => console.log("pussiboi"),
    smartBackspace: false,
    backSpeed: 40,
    backDelay: 10000
  };
  
let typed = new Typed('#intro', options);

function isKorean(str) {
  return true;
}

function preStringTyped (arrayPos, self) {
  // if (isKorean(self.strings[arrayPos])) {

  // }
}