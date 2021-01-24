import {clear, println} from './buffer'
import {config} from './input'

config.onEnter = (input) => {
  input = input.toLowerCase()
  const command = input.split(' ')[0]
  const param = input.slice(command.length + 1)
  // console.log(command, ':', param)
  switch (command){
    case "help":
    case "man":
    case "manual":
      println(help)
    break
    case "clear":
      clear()
    break
    case "say":
      println(param)
    break;
    case "date":
      switch (param.split(' ')[0]){
        case "human":
          println(new Date().toDateString())
        break
        case "locale":
          println(new Date().toLocaleDateString())
        break
        case "iso":
          println(new Date().toISOString())
        break
        case "json":
          println(new Date().toJSON())
        break

        default:
        case "":
          println(new Date().toString())
      }
    break;
    case "exec":
      println(eval(param))
    break
    
    default:
      println('unknown command: ' + command)
      println('enter "help" for help.')
  }
}

let help = "So these are the commands you can use:"
      + "\n help, man, manual - prints this message"
      + "\n clear - clears console"
      + "\n say [param]... - prints folowing text to the console"
      + "\n date [human/locale/iso/json/{default}] - prints the current date"
      + "\n exec [param]... - executes following text as js"
