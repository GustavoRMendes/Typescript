// ?: , unkown , any , never

function showPerson (person: { name : string , team ?: string }){
  //...
}
showPerson ({ name: 'Gustavo' })

let vehicle : unknown
vehicle = 'Carro'
vehicle = 19
vehicle = []

let state : any
state = ''

let programming : never
if (true) {
  let check = true
} else {
  let check : never
}