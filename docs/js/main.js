var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Cursor {
    constructor(id) {
        this.blinkTime = 1000;
        this.hide = () => {
            this.element.classList.add("invisible");
            this.element.classList.remove("visible");
        };
        this.show = () => {
            this.element.classList.add("visible");
            this.element.classList.remove("invisible");
        };
        this.element = document.getElementById(id);
        this.startBlinking();
    }
    startBlinking() {
        this.blinkerInterval = setInterval(() => {
            setTimeout(this.hide, 0);
            setTimeout(this.show, this.blinkTime * 0.4);
        }, this.blinkTime);
        this.show();
    }
    stopBlinking() {
        clearInterval(this.blinkerInterval);
    }
    hasMovedHook() {
        this.stopBlinking();
        this.startBlinking();
    }
}
let charPause = { from: 20, to: 100 };
let enterPause = { from: 1000, to: 2000 };
const startTyping = ({ textId, cursorId, texts, repetitionNumber = Infinity }) => __awaiter(this, void 0, void 0, function* () {
    let element = document.getElementById(textId);
    let remainingChars = "Here's some fact about Dani's manager or Zsófi as some of you know her. ".split('');
    let cursor = new Cursor(cursorId);
    let enterText = () => {
        return new Promise((resolver) => __awaiter(this, void 0, void 0, function* () {
            while (remainingChars.length) {
                yield enterChar(remainingChars.splice(0, 1)[0]);
            }
            setTimeout(resolver.bind(this), getRandom(enterPause));
        }));
    };
    let enterChar = (char) => {
        return new Promise(resolver => {
            element.innerText += char;
            setTimeout(resolver.bind(this), getRandom(charPause));
            cursor.hasMovedHook();
        });
    };
    while (repetitionNumber--) {
        yield enterText();
        remainingChars = texts[getRandom({ from: 0, to: texts.length - 1 })].split('');
    }
});
let getRandom = (interval) => {
    return Math.floor(Math.random() * (interval.to - interval.from) + interval.from);
};
let texts = ["Dani's manager's name is Zsófi. Not Zsófia, this's important! ", "Henceforth she's Sanyi's girlfriend too and still Zsófi. ", "Important to notice that her name is nothing else than Zsófi. ", "We should also mention that her name 'Zsófi' is not to be mixed up with 'Szófi' as these two names are completly different. "];
console.log(texts);
startTyping({ textId: "text", cursorId: "cursor", texts: texts });
