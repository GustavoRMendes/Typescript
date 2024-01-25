function twoNumbers<T, U>(x: T, y: U): [T, U] {
  return [x, y];
}
const result = twoNumbers<string, number>("Texto", 2);

class User<U> {
  private name: U | undefined;
}

function ListArray<E>(array: E): E | void {
  return array;
}
console.log(ListArray<string>("Test"));

function lista<Type>(arg: Array<Type>): Array<Type> | undefined{
  console.log(arg.length)
  return arg
}
function lista2<Type>(arg: Type[]): Type[] | undefined{
  console.log(arg.length)
  return arg
}