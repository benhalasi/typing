let tb = document.querySelector('.terminal-buffer') as HTMLElement
let ta = document.querySelector('.terminal-buffer--content') as HTMLElement

let getWidth = (width: string = '1ch') :number => {
  let el = document.createElement('div')
  document.querySelector('body').appendChild(el)
  el.style.width = width
  let ret = parseFloat(window.getComputedStyle(el).width)
  document.querySelector('body').removeChild(el)
  return ret
}

let fit = () => {
  // tb.style.maxHeight = getWidth('100vh') - parseFloat(window.getComputedStyle(tb).lineHeight) + 'px'

  var str = ta.innerHTML
  var cols = Math.floor(getWidth('100vw') / getWidth('1ch'))

  var linecount = 0;
  str.split('\n').forEach((l) => {
    // console.log('line', l, linecount)
    linecount += Math.max(Math.ceil( l.length / cols), 1) // Take into account long lines, empty lines
    // console.log('line', l, linecount)
  })
  linecount--
  
  // console.log(linecount, parseFloat(window.getComputedStyle(ta).lineHeight) * linecount + 'px')
  // ta.style.height = parseFloat(window.getComputedStyle(ta).lineHeight) * linecount + 'px'

  if(tb.scrollHeight - parseFloat(window.getComputedStyle(tb).lineHeight) <= tb.scrollTop + parseFloat(window.getComputedStyle(tb).height))
    tb.scrollTop = tb.scrollHeight;    
};

ta.addEventListener('input', fit)

export function println (input: string = '') {
  ta.innerHTML += ''
  + input + '<br/>'
  ta.dispatchEvent(new InputEvent('input'))
}

export function clear () {
  ta.innerHTML = ''
  println(welcome)
}

const welcome = "Hello... etc etc<br/>version=v-0.1.3<br/>" + new Date()
println(welcome)

tb.scrollTop = tb.scrollHeight;