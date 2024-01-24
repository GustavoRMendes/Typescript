let arrayVoid = []
let lista : [string,string,string]
lista = ['Felipe','Gustavo','Téo']
enum setupDeveloper {
  MOUSE = 'mouse',
  NOTEBOOK = 'notebook',
  HEADSET = 'headset'
}
function showDeveloper(){
  arrayVoid.push(setupDeveloper.MOUSE,setupDeveloper.HEADSET,setupDeveloper.NOTEBOOK)
  alert(`Meu ${setupDeveloper.MOUSE} é preto `)
  alert(arrayVoid.forEach((e) => alert(e)))
  alert(lista.forEach((e) => alert(e.length > 3)))
}
function avoidingTyping(){
  let monitor : unknown
  let ledLights : any
  if (true) {
    //coding
  } else {
    let microphone : never
  }
}
const obj =  {
  mouse: 700,
  pc: 5000,
  keyboard: 1000
}
function setup(obj:{mouse?:number,pc:number,keyboard?:number}){
  alert(`Meu notebook foi ${obj.pc}`)
}
setup({pc:7000})
showDeveloper()