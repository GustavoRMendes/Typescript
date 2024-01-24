let arrayVoid = [];
let lista;
lista = ['Felipe', 'Gustavo', 'Téo'];
var setupDeveloper;
(function (setupDeveloper) {
    setupDeveloper["MOUSE"] = "mouse";
    setupDeveloper["NOTEBOOK"] = "notebook";
    setupDeveloper["HEADSET"] = "headset";
})(setupDeveloper || (setupDeveloper = {}));
function showDeveloper() {
    arrayVoid.push(setupDeveloper.MOUSE, setupDeveloper.HEADSET, setupDeveloper.NOTEBOOK);
    alert(`Meu ${setupDeveloper.MOUSE} é preto `);
    alert(arrayVoid.forEach((e) => alert(e)));
    alert(lista.forEach((e) => alert(e.length > 3)));
}
function avoidingTyping() {
    let monitor;
    let ledLights;
    if (true) {
        //coding
    }
    else {
        let microphone;
    }
}
const obj = {
    mouse: 700,
    pc: 5000,
    keyboard: 1000
};
function setup(obj) {
    alert(`Meu notebook foi ${obj.pc}`);
}
setup({ pc: 7000 });
showDeveloper();
