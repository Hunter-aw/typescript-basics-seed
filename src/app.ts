//////////////////////////////INTERFACES
//interfaces are a special type that allow us to define teh structure or shape of an object
// we can extend classes with interfaces, not so much with types. better for complex
interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes{
  name: string;
  toppings?: number
  getAvailibleSizes(): string[];
  [key: number] : string //dynamic key
}

interface Pizzas {
  data: Pizza[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
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
