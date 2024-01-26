
interface MathFunc{
  (x: number, y: number) : number
}

const sum : MathFunc =  (x: number, y: number): number => {
  return x + y;
};

const result = sum(1, 2);

const log = (message: string): void => {
  console.log(message);
};

const sub : MathFunc = (x: number, y:number) : number => {
  return  x - y
}