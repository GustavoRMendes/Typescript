// Tipos Literais
// let literal : "Hello, World!"
// let pi : 3.14159
// const test = 10

let option : "Yes" | "No" |"Maybe" | null
option = null

let test : number | string | boolean
test = 10
test = ""
test = true


type Planet = "Mercúrio" | "Terra" | "Marte" | "Venûs" | "Júpiter" | "Saturno" | "Neturno" | "Urano" | "Plutão"

let planet : Planet
let homePlanet : Planet

function checkPlanet(planet: Planet){
  if(planet === "Terra"){
    console.log('Estamos na terra')
  }
}

type GreetingCallback = (name:string) => void

function greet(callbackfn: GreetingCallback){
  let name = 'Guga'
  callbackfn(name)
}