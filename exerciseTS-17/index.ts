import {Person} from './module'
import * as lodash from 'lodash'

interface User extends Person {
  game: string
}

let user1 : User
//user1.game = false
//lodash.camelCase(user1.name)