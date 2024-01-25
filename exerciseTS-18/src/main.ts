class Game {
  private firstName: string
  private level: number
  protected lastName: string
  constructor(firstName:string,level:number){
    this.firstName = firstName
    this.level = level
  }
  public showGame(){
    return this.firstName + ' ' + this.level
  }
  get levelGame(){
    return this.level
  }
  set levelGame(level: number){
    this.level = level
  }
}

class User extends Game {
  private xp: number
  constructor(firstName:string,level:number,xp:number){
    super(firstName,level)
    this.xp = xp
  }
}

const game1 = new Game('Fifa 23',22)
const user1 = new User('Gustavo',10,1000)
game1.showGame()
game1.levelGame