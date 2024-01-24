type PlanetSituation =  "habitado" | "habitável" | "inabitável" | "inexplorado"
type PlanetCoordinates = [number,number,number,number] 
type Planet = {
  name:string,
  coordinates: PlanetCoordinates,
  situation: PlanetSituation,
  satellites: string[]
}
const listPlanets : Planet[] = []

function addPlanet(name:string,coordinates:PlanetCoordinates,situation:PlanetSituation){
  listPlanets.push({
    name,
    coordinates,
    situation,
    satellites: []
  })
  alert(`Planeta ${name} salvo.`)
}

function findPlanet(name:string){
  const planet = listPlanets.find((e) => e.name === name)
  return planet ?? false
}

function updateSituation(situation:PlanetSituation, planet: Planet){
  planet.situation = situation

  alert(`A situação do planeta ${planet.name} foi atualizada para ${planet.situation}`)
}

function addSatellites(name:string,planet: Planet){
  planet.satellites.push(name)
  alert(`Adicionando o satélite ${planet.satellites} no planeta ${planet.name}`)
}

function removePlanet(name:string,planet:Planet){
  planet.satellites = planet.satellites.filter((satellite) => satellite !== name)
  alert(`O satélite ${name} foi removido do planeta ${planet.name}`)
}

function promptSituation(){
  let situation : PlanetSituation
  let validum = false
  while(!validum){
    const situationInput = prompt(`
    Insira a situação do planeta: 
    
    1. Habitado
    2. Habitável
    3. Inabitável
    4. Inexplorado
    `)
    switch(situationInput){
      case "1":
        situation = "habitado"
        validum = true
        break
      case "2":
        situation = "habitável"
        validum = true
        break
      case "3":
        situation = "inabitável"
        validum = true
        break
      case "4":
        situation = "inexplorado"
        validum = true
        break
      default: 
        alert("Opção Inválida")
  }
  }
  return situation
}
// Aqui anotamos os tipos da função callback
// para facilitar a sua implementação futura
function promptValidPlanet(callback: (planet: Planet) => void) {
  const planetName = prompt('Informe o nome do planeta:')
  const planet = findPlanet(planetName)

  // Aqui podemos reparar que o VS Code nos
  // avisa sobre o tipo Union de planet
  if (planet) {
    callback(planet)
  } else {
    alert('Planeta não encontrado! Retornando ao menu...')
  }
}

// Opções do Menu

function firstMenuOption() {
  const name = prompt('Informe o nome do planeta:')
  const coordinateA = Number(prompt('Informe a primeira coordenada:'))
  const coordinateB = Number(prompt('Informe a segunda coordenada:'))
  const coordinateC = Number(prompt('Informe a terceira coordenada:'))
  const coordinateD = Number(prompt('Informe a quarta coordenada:'))

  // Aqui a nossa função ajuda a ter um código mais organizado
  const situation = promptSituation()

  const confirmation = confirm(`Confirma o registro do planeta ${name}?
  Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
  Situação: ${situation}`)

  if (confirmation) {
    addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
  }
}
// Nessas três funções vemos como a nossa função de callback
// proporciona uma facilidade enorme na implementação
function secondMenuOption() {
  // Além disso temos acesso automático às informações
  // dos argumentos, nesse caso a variável planet
  promptValidPlanet(planet => {
    const situation = promptSituation()
    updateSituation(situation, planet)
  })
}

function thirdMenuOption() {
  promptValidPlanet(planet => {
    const satellite = prompt('Informe o nome do satélite a ser adicionado:')
    addSatellites(satellite, planet)
  })
}

function fourthMenuOption() {
  promptValidPlanet(planet => {
    const satellite = prompt('Informe o nome do satélite a ser removido:')
    removePlanet(satellite, planet)
  })
}
function fifthMenuOption() {
  let list = 'Planetas:\n'

  listPlanets.forEach(planet => {
    // Repare que as tuplas são uma forma fácil de permitir a
    // desestruturação com qualquer nome nas variáveis.
    // As variáveis a seguir podem ter qualquer nome pois a
    // tupla segue um padrão fixo.
    const [a, b, c, d] = planet.coordinates

    list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satélites: ${planet.satellites.length}
    `

    planet.satellites.forEach(satellite => {
      list += `    - ${satellite}\n`
    })
  })

  alert(list)
}
// Menu

let userOption = 0

while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenuOption()
      break
    case 2:
      secondMenuOption()
      break
    case 3:
      thirdMenuOption()
      break
    case 4:
      fourthMenuOption()
      break
    case 5:
      fifthMenuOption()
      break
    case 6:
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}
// let option = ""

// do{
//   option = `
//   Exercício: Criando novos Tipos

//   1. Salvar um novo planeta
//   2. Atualizar a situação de um planeta
//   3. Adicionar satélite a um planeta
//   4. Remover um satélite de um planete
//   5. Listar os planetas salvos
//   6. Sair do programa
//   `
//   switch(option){
//     case "1":
//       addPlanet()
//       break;
//     case "2":
//       updateSituation()
//       break
//     case "3":
//       addSatellites()
//       break
//     case "4":
//       removePlanet()
//       break
//     case "5":
//       showListPlanets()
//       break
//     case "6":
//       alert("Fechando o sistema...")
//       break
//     default:
//       alert("Opção inválida")
//   }
// }while(option !== "6")