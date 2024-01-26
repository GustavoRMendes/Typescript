// Type

type Product = {
  productId: string
  price: number
}

type User  = {
  firstName: string
  age: number
  phone?: number 
  email: string
  products?: Product[]
  register():string
}
const user : User = {
  firstName: 'Gustavo',
  age: 19,
  email:'gustavormendess@gmail.com',
  products: [{price:225,productId:'1'}],
  register(){
    return 'texto'
  }
}
const printf = (message:number) => {
}
printf(user.phone!)

// Unions
type Author = {
  books: string[]
}
const author1 : Author & User = {
  books: [''],
  age:2,
  email:'',
  firstName:'',
  phone:29,
  products: [],
  register(){
    return 'string'
  }
}
type Grade = number | string
const grade : Grade = 1

// interfaces
interface UserInterface { 
  readonly firstName: string
  email: string
  login(): string
}
const emailUser : UserInterface = {
  firstName: '',
  email: '',
  login(){
    return `a`
  }
}
interface AuhtorInterface {
  books: string[]
}

const newAuthor : AuhtorInterface & UserInterface  = {
  books : [],
  email : '',
  firstName : '',
  login(){
    return ''
  }
}

