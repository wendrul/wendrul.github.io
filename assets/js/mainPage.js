import { KoreanIMEString } from "./TypedKorean.js";
import Typed from "/node_modules/typed.js/src/typed.js"
// import {gksdud, reverseGksdud} from "/gksdud/lib/gksdud.js"

let options = {
    strings: ["Hola", "Hello", "Bonjour", "こんにちは", "안녕하세요! hola"],
    typeSpeed: 60,
    stringsElement: '#intro-strings',
    loop: true,
    shuffle: true,
    smartBackspace: false,
    backSpeed: 40,
    backDelay: 3000
  };
  
let typed = new Typed('#intro', options);

