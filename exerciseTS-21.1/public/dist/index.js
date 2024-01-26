var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Praticando @Decorators
function Decorator() {
    return function (target, key, descriptor) {
        console.log('Chamando Decorator!!!');
    };
}
class Person {
    firstName;
    constructor(firstName) {
        this.firstName = firstName;
    }
    showFirstName(text) {
        //...
        return text.toUpperCase();
    }
}
__decorate([
    Decorator()
], Person.prototype, "showFirstName", null);
const person1 = new Person('Gustavo');
console.log(person1.showFirstName(person1.firstName));
