/////////////////////////Function types & Optional Arguments

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y = 1) => {
//   return x * y;
// };

// const sum = sumOrder(25)

// console.log(`Total sum: ${sum}`)

/////////////////////////////OBJECT TYPES

// let pizza: {name : string, price: number; getName(): string} = {
//     name: "Plain Old Pepperoni",
//     price: 20,
//     getName() {
//         return this.name
//     }
// }

// console.log(pizza.getName())

//////////////////////////ARRAY TYPES

// let sizes: number[]

// sizes = [1, 2, 3]

// // let toppings: string[]
// let toppingsL (string | number)[]
// let toppings: Array<string | number>

// toppings = ['pepperoni', 'tomato', 'bacon', 5];

////////////////////// TUPLE TYPES

// let pizza: [string, number, boolean]

// pizza = ['Pepperoni', 20, true];

///////////////////////TYPE ALIAS
// type Size = 'small' | 'medium' | 'large'
// type Callback = (size: Size) => void

// let pizzaSize: Size = 'small';

// const selectSize: Callback = x => {
//     pizzaSize = x;
// };

// selectSize('medium')

///////////////////////TYPE ASSERTIONS
// declaring the type of something you might not know

type Pizza = { name: string; toppings: number };

const pizza: Pizza = {name: 'Blazing Inferno', toppings: 5}

const serialized = JSON.stringify(pizza)

function getNameFromJSON(obj: string) {
    return(JSON.parse(obj) as Pizza).name
}

getNameFromJSON(serialized)
