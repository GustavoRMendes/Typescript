// Praticando @Decorators
function Decorator(){
  return function(target,key,descriptor){
    console.log('Chamando Decorator!!!')
  }
}
class Person {
  firstName: string
  constructor(firstName:string){
    this.firstName = firstName
  }
  @Decorator()
  showFirstName(text:string){
    //...
    return text.toUpperCase()
  }
}
const person1 = new Person('Gustavo')
console.log(person1.showFirstName(person1.firstName))