!function r(o,i,a){function u(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return u(o[t][1][e]||e)},n,n.exports,r,o,i,a)}return i[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.clear=n.println=void 0;function r(e){void 0===e&&(e="1ch");var t=document.createElement("div");return document.querySelector("body").appendChild(t),t.style.width=e,e=parseFloat(window.getComputedStyle(t).width),document.querySelector("body").removeChild(t),e}var o=document.querySelector(".terminal-buffer"),i=document.querySelector(".terminal-buffer--io");function a(e){void 0===e&&(e=""),i.value+=e+"\n",i.dispatchEvent(new InputEvent("input"))}i.addEventListener("input",function(){o.style.maxHeight=r("100vh")-parseFloat(window.getComputedStyle(o).lineHeight)+"px",i.cols=Math.floor(r("100vw")/r("1ch"));var e=i.value,t=i.cols,n=0;e.split("\n").forEach(function(e){n+=Math.max(Math.ceil(e.length/t),1)}),n--,i.style.height=parseFloat(window.getComputedStyle(i).lineHeight)*n+"px",i.rows=n,o.scrollHeight-parseFloat(window.getComputedStyle(o).lineHeight)<=o.scrollTop+parseFloat(window.getComputedStyle(o).height)&&(o.scrollTop=o.scrollHeight)}),n.println=a,n.clear=function(){i.value="",a(u)};var u="Hello... etc etc\nversion=v-0.1.3\n"+new Date;a(u),o.scrollTop=o.scrollHeight},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.config=void 0;var r=e("./buffer"),e=document.querySelector(".terminal-input"),o=(document.querySelector(".terminal-input--styled"),document.querySelector(".terminal-input--before")),i=document.querySelector(".terminal-input--element");document.getElementsByTagName("body")[0].addEventListener("click",function(e){i.focus()}),e.addEventListener("focusout",function(e){}),i.addEventListener("input",function(e){i.style.width=i.value.length+"ch"}),i.addEventListener("keypress",function(e){"Enter"==e.key&&(r.println(o.innerText+i.value),a.onEnter(i.value),i.value="",i.dispatchEvent(new InputEvent("input")))}),i.dispatchEvent(new InputEvent("input"));var a={onEnter:function(e){r.println(e)}};n.config=a},{"./buffer":1}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var buffer_1=require("./buffer"),input_1=require("./input");input_1.config.onEnter=function(input){input=input.toLowerCase();var command=input.split(" ")[0],param=input.slice(command.length+1);switch(command){case"help":case"man":case"manual":buffer_1.println(help);break;case"clear":buffer_1.clear();break;case"say":buffer_1.println(param);break;case"date":switch(param.split(" ")[0]){case"human":buffer_1.println((new Date).toDateString());break;case"locale":buffer_1.println((new Date).toLocaleDateString());break;case"iso":buffer_1.println((new Date).toISOString());break;case"json":buffer_1.println((new Date).toJSON());break;default:buffer_1.println((new Date).toString())}break;case"exec":buffer_1.println(eval(param));break;default:buffer_1.println("unknown command: "+command),buffer_1.println('enter "help" for help.')}};var help="So these are the commands you can use:\n help, man, manual - prints this message\n clear - clears console\n say [param]... - prints folowing text to the console\n date [human/locale/iso/json/{default}] - prints the current date\n exec [param]... - executes following text as js"},{"./buffer":1,"./input":2}]},{},[3]);
//# sourceMappingURL=bundle.js.map
