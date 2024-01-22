const person = {
  name:'Gustavo',
  age:19
}
function showPerson(person: { name: string; age: number },age: number){
  person.age = age
}
showPerson(person,20)