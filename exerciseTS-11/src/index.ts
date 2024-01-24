// Criando tipos em Typescript 
let listUsers = []
type Friends = [string,string,string,string]
type User = {
  name: string,
  age: number,
  work: string
}
let listFriends : Friends
function addUser(firstName:string,age:number,work:string,friends:Friends ){
  const user1 = {
    firstName,
    age,
    work,
    friends
}
  listUsers.push(user1)
  alert(`
  O user ${firstName} tem ${age} anos de idade. 
  Trabalha como ${work}, e seus amigos são ${friends}!`
)
}
function showList(){
  listUsers.forEach((user) => console.log(user))  
}
function findUser(firstName:string){
  listUsers.filter((e) => console.log(e))
}