let Firstname : string = 'Gustavo'
let names : string[] = []
const list : readonly string[] = ['Lilian']
names.push(Firstname)

const graph : [number,number] = [12,21]
const [x,y] = graph

const car : {type:string , model ?: string} = {
  type: 'Toyota'
}
car.model = ''
car.type = ''
//car.type = 1

enum Status {
  OK = 202,
  ERROR = 404,
  RECONECT = 303
}