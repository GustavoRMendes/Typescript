// Generics
const returnValue = <T>(value: T): T => value
const message = returnValue<string>('Hello')
const count = returnValue<number>(5)

const list = <T>(i: T[]): T [] => i 
const listString = list<string>(['',''])
const listNumber = list<number>([0,25,40])

function getFirstElementArray<U>(array: U []) {
  return array[0]
}
const first = getFirstElementArray<string>(['first','last'])
const firstNumber = getFirstElementArray<number>([2,3])

// Promises
const returnPromise = async (): Promise <number> => {
  return 10
}

// Classes
class GenericNumber <T> {
  zeroValue:T
  add:(x:T,y:T) => T
  constructor(zeroValue: T, add: (x:T,y:T) => T) {
    this.zeroValue = zeroValue
    this.add = add
  }
}

const myGenericNumber = new GenericNumber<number>(0,(x:number,y:number) => {
    return x + y
})