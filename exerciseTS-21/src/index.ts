// @Decorators
function Decorator(){
  return function(target,key,descriptor){
    descriptor.value = function(value: number){
      console.log(`Calculando ${value} elevado ao quadrado!`)
      return Math.pow(value,2)
    }
  }
}
class Planet {
  name: string
  constructor(name:string){
    this.name = name
  }
  @Decorator()
  calculate(value: number){
    //...
    console.log(`Calculando ${value} vezes 2`)
    return value * 2
  }
}
const planet = new Planet('Terra')
const result = planet.calculate(5)
console.log('O resultado = ' + result)