// Interfaces
interface CelestialBody {
  name: string,
  mass: number
}

const moon : CelestialBody = {
  name: 'Moon',
  mass: 20022982
}
interface Star extends CelestialBody {
  age: number,
  planets : Planet[]
}

interface Planet extends CelestialBody {
  population: number,
  createSatellite:  (name:string) => void
}

let sum : Star
sum.name = 'Sol'
sum.age = 2989281
sum.mass = 98198
sum.planets = []

interface UserPlanet extends CelestialBody{
  color:string
}

const earth : UserPlanet = {
  name: 'Terra',
  mass: 398828,
  color: 'Azul e verde'
}

// Interfaces moldando classes

class MillPlanet implements Planet {
  name:string
  mass: number
  population: number
  satellites: string[]
  constructor(name:string,mass:number,population:number,satellites:string[]){
    this.name = name
    this.mass = mass
    this.population = population
    this.satellites = satellites
  }
  createSatellite: (name: string) => {
    //...
  };
}

interface Planet {
  satellites?: string[]
}

class UserPlanetClass implements UserPlanet {
  name: string
  mass: number
  color: string
  constructor(name:string,mass:number,color:string){
    this.name = name
    this.mass = mass
    this.color = color
  }
}