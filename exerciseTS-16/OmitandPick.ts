// Omit = Omitir
interface Car {
  name: string;
  year: number;
  model: string;
  price: number;
  sold: boolean;
  convertible: boolean;
  carSeats: number;
}

interface Corolla {
  id: number;
  property: Omit<Car, "sold" | "model" | "carSeats">;
}
let car1: Corolla;
//car1.property.name

// Pick = Escolher 
type CarUser = Pick<Car, "name" | "year" | "price">;
let car2: CarUser;
//car2.name
