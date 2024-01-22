const arraySpaceship = [];
function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };
  arraySpaceship.push(spaceship);
  alert("A nave " + spaceship.name + " foi adicionada!");
}

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };
  spaceship = arraySpaceship.find((ship) => ship.name === name);
  return spaceship;
}

function addMember(
  member: string,
  spaceship: { name: string; crewLimit: number; crew: string[] }
) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert("Tripulação cheia");
  } else {
    spaceship.crew.push(member);
    alert("Membro adicionado a tripulação.");
  }
}

function sendSpaceship(spaceship: {
  name: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) {
  if (spaceship.inMission) {
    alert("A nave ja foi mandada para uma missão.");
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert("Tripulação Insuficiente.");
  } else {
    spaceship.inMission = true;
    alert("Nave foi enviada com sucesso para missão.");
  }
}

function firstMenu() {
  const name = prompt("Digite o nome da nave: ");
  const pilot = prompt(`Digite o nome do piloto da nave ${name}: `);
  const crewLimit = Number(
    prompt(
      `Digite quantos tripulantes a nave ${name} do piloto ${pilot} suporta?`
    )
  );

  const saveConfirm = confirm(`
    Confirma salvar esses dados? 

    Nome da nave: ${name}
    Piloto: ${pilot}
    Limite de tripulantes: ${crewLimit}
  `);
  if (saveConfirm) {
    addSpaceship(name, pilot, crewLimit);
  }
}

function secondMenuOption() {
  const member = prompt("Qual é o nome do tripulante?");
  const spaceshipName = prompt(
    `Para qual nave ${member} deverá ser designado?`
  );
  const spaceship = findSpaceship(spaceshipName);

  if (spaceship) {
    const confirmation = confirm(
      `Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`
    );

    if (confirmation) {
      addMember(member, spaceship);
    }
  }
}

function thirdMenuOption() {
  const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')

  const spaceship = findSpaceship(spaceshipName);

  if (spaceship) {
    const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)

    if (confirmation) {
      sendSpaceship(spaceship)
    }
  }
}

function fourthMenuOption() {
  let list = 'Naves Registradas:\n'

  arraySpaceship.forEach((spaceship: {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[],
    inMission: boolean
  }) => {
    list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
      Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}
    `

    spaceship.crew.forEach(member => {
      list += `    - ${member}\n`
    })

  })

  alert(list)
}
/**
 * Menu
 */

let userOption = 0;

while (userOption !== 5) {
  const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `

  userOption = Number.parseInt(prompt(menu))

  switch (userOption) {
    case 1:
      firstMenu()
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
      alert('Encerrando o sistema...')
      break
    default:
      alert('Opção inválida! Retornando ao painel principal...')
      break;
  }
}