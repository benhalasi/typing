let charPause: Interval = { from: 20, to: 100 }
let enterPause: Interval = { from: 1000, to: 2000 }

const startTyping = async ({ textId, cursorId, texts, repetitionNumber = Infinity }: { textId: string; cursorId: string; texts: string[]; repetitionNumber?: number; }) => {
    let element = document.getElementById(textId);
    let remainingChars: string[] = "Here's some fact about Dani's manager or Zsófi as some of you know her. ".split('')

    let cursor = new Cursor(cursorId)

    let enterText = (): Promise<void> => {
        return new Promise(async (resolver) => {
            while (remainingChars.length) {
                await enterChar(remainingChars.splice(0, 1)[0])
            }
            setTimeout(resolver.bind(this), getRandom(enterPause))
        });

    }

    let enterChar = (char: string): Promise<void> => {
        return new Promise(resolver => {
            element.innerText += char
            setTimeout(resolver.bind(this), getRandom(charPause))

            cursor.hasMovedHook()
        });
    }

    while (repetitionNumber--) {
        await enterText();
        remainingChars = texts[getRandom({ from: 0, to: texts.length - 1 })].split('')
    }

}

let getRandom = (interval: Interval): number => {
    return Math.floor(Math.random() * (interval.to - interval.from) + interval.from);
}


let texts = ["Dani's manager's name is Zsófi. Not Zsófia, this's important! ", "Henceforth she's Sanyi's girlfriend too and still Zsófi. ", "Important to notice that her name is nothing else than Zsófi. ", "We should also mention that her name 'Zsófi' is not to be mixed up with 'Szófi' as these two names are completly different. "]
console.log(texts)
startTyping({ textId: "text", cursorId: "cursor", texts: texts })
