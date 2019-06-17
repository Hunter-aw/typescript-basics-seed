//////////////////////////////INTERFACES
//interfaces are a special type that allow us to define teh structure or shape of an object
// we can extend classes with interfaces, not so much with types. better for complex
interface Sizes2 {
    sizes: string[];
}

interface Pizza2 extends Sizes2{
  name: string;
  toppings?: number
  getAvailibleSizes(): string[];
  [key: number] : string //dynamic key
}

interface Pizzas2 {
  data: Pizza2[];
}

let pizza: Pizza2;

function createPizza(name: string, sizes: string[]): Pizza2 {
  return {
    name,
    sizes,
    getAvailibleSizes() {
      return this.sizes;
    }
  };
}

pizza = createPizza("Pepperoni", ["small", "large"]);

pizza.toppings = 1

pizza[1] = 'xyz'
