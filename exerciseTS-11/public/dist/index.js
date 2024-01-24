// Criando tipos em Typescript 
let listUsers = [];
let listFriends;
function addUser(firstName, age, work, friends) {
    const user1 = {
        firstName,
        age,
        work,
        friends
    };
    listUsers.push(user1);
    alert(`
  O user ${firstName} tem ${age} anos de idade. 
  Trabalha como ${work}, e seus amigos são ${friends}!`);
}
function showList() {
    listUsers.forEach((user) => console.log(user));
}
function findUser(firstName) {
    listUsers.filter((e) => console.log(e));
}
