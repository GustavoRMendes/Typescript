function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 10,
    inMission: true,
    crew: [],
  };
  alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} 
  foi enviada em uma missão!`);
  return spaceship;
}

function accelerate(
  targetSpeed: number,
  spaceship: { name: string; speed: number }
) {
  if (spaceship.speed > targetSpeed) {
    alert("Reduzindo a velocidade");
  } else if (spaceship.speed < targetSpeed) {
    alert("Aumentando a velocidade");
  } else {
    alert("Mantendo a velocidade");
  }
}

const spaceshipName = prompt("Insira o nome da nave: ");
const spaceshipCaptain = prompt("Insira o nome do  capitão: ");

const current = sendSpaceship(spaceshipName, spaceshipCaptain);

const speed = Number(prompt("Insira a velocidade que deseja acelerar: "));

accelerate(speed, current);
