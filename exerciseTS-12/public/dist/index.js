const moon = {
    name: 'Moon',
    mass: 20022982
};
let sum;
sum.name = 'Sol';
sum.age = 2989281;
sum.mass = 98198;
sum.planets = [];
const earth = {
    name: 'Terra',
    mass: 398828,
    color: 'Azul e verde'
};
// Interfaces moldando classes
class MillPlanet {
    name;
    mass;
    population;
    satellites;
    constructor(name, mass, population, satellites) {
        this.name = name;
        this.mass = mass;
        this.population = population;
        this.satellites = satellites;
    }
    createSatellite;
}
class UserPlanetClass {
    name;
    mass;
    color;
    constructor(name, mass, color) {
        this.name = name;
        this.mass = mass;
        this.color = color;
    }
}
