// Generics
function first<Type>(array:Type) : Type | undefined{
  return array[0]
}

function last<ArrayType>(array: ArrayType[]) : ArrayType | undefined{
  return array[array.length - 1]
}

const names = ['Casemiro','Neymar','Rodrigo']

const firstName = first(names)
const lastName = last(names)

function showNumber<T>(numero : T) : T | undefined {
  return numero
}
console.log(showNumber(1))