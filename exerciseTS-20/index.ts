// Generics
function showValue<T>(value: T ): void{
  console.log(value)
}

showValue<string>('Texto')
showValue<number>(10)
showValue<boolean>(true)

function list<Type>(arg: Type[]) : Type[] {
  return arg
}

let friends : readonly string[]= ['Guga','Felp']
let amigos = ['','','']
list(amigos)