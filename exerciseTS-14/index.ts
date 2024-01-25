// Interface
interface Pessoa {
  name:string,
  age:number,
  cpf:number,
  work: boolean
}

const aluno : Pessoa = {
  name:'rian',
  age:21,
  cpf:3984938,
  work:true
}
interface Aluno extends Pessoa {
  friends: string[]
}

const aluno1 : Aluno = {
  name:'Gustavo',
  age:19,
  cpf:3052229290,
  work:false,
  friends: ['Camilo','Felipe']
}

class Aluno implements Pessoa {
  name: string;
  age: number;
  cpf: number;
  work: boolean;
  constructor(name:string,age:number,cpf:number,work:boolean){
    this.name = name
    this.age = age
    this.cpf = cpf
    this.work = work
  }
}
const aluno2 = new Aluno('Guga',22,44,true)
