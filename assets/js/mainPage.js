import { KoreanIMEString } from "./TypedKorean.js";
import Typed from "/node_modules/typed.js/src/typed.js"
// import {gksdud, reverseGksdud} from "/gksdud/lib/gksdud.js"

let options = {
    stringsElement: '#intro-strings',
    typeSpeed: 60,
    loop: true,
    shuffle: true,
    smartBackspace: false,
    backSpeed: 40,
    backDelay: 3000
  };
  
let typed = new Typed('#intro', options);
// typed.stop();

