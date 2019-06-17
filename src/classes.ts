interface SizesInterface {
    availibleSizes: string[]
}

//abstract classes cannot be instantiated
abstract class Sizes implements SizesInterface {
    constructor (protected sizes: string[]) {}

    get availibleSizes () {
        return this.sizes
    }

    set availibleSizes (sizes: string[]) {
        this.sizes = sizes
    }
}

// const sizes = new Sizes(["small", "medium", "large"])

// sizes.availibleSizes = ['small', 'medium']

// console.log(sizes.availibleSizes)

interface PizzaInterface extends SizesInterface{
    readonly name: string
    toppings: string[]
    updateSizes(sizes: string[]): void
    addTopping(topping: string): void
}

class Pizza extends Sizes implements PizzaInterface{
    // name: string;
    //we have private, public, and readonly, and protected
    public toppings: string[] = [];
    //properties we are expecting to bind we need to declare upfront with typescript
    // constructor(name: string) {
    //     this.name = name
    // }

    //by default everything is public
    //we can write our constructor like this to get the default this.name = name
    constructor(readonly name : string, sizes: string[]) {
        super(sizes)
    }

    public addTopping( topping: string) {
        this.toppings.push(topping)
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes
    }

}

const pizzza = new Pizza('Pepperoni', ['small', 'medium'])

pizzza.addTopping('pepperoni')

console.log(pizzza.name)
// pizzza.availibleSizes
console.log(pizzza.availibleSizes)


////////////STATIC PROPERTIES/METHODS

class Coupon {
    static allowed = ['pepperoni', 'Blazing Inferno']
    static create(percentage:number){
        return `PIZZA_RESTAURANT_${percentage}`
    }
}

console.log(Coupon.allowed)
console.log(Coupon.create(25))