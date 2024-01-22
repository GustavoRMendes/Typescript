function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 10,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " \n  foi enviada em uma miss\u00E3o!"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade");
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade");
    }
    else {
        alert("Mantendo a velocidade");
    }
}
var spaceshipName = prompt("Insira o nome da nave: ");
var spaceshipCaptain = prompt("Insira o nome do  capitão: ");
var current = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade que deseja acelerar: "));
accelerate(speed, current);
