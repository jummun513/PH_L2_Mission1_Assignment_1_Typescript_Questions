// problem --> 1
const lengthOrSquare = (param: number | string): number | undefined => {
    if (typeof param === 'number') {
        return param * param;
    }
    else if (typeof param === 'string') {
        return param.length;
    }
}


// problem --> 2
interface Person {
    address?: {
        city: string;
        street: string;
    }
    phone?: string;
}
const getAddressCity = (param: Person): string | undefined => {
    return param.address?.city;
}


// problem --> 3
class Cat {
    name: string;
    origin: string;
    age: number;
    constructor(name: string, origin: string, age: number) {
        this.name = name;
        this.origin = origin;
        this.age = age;
    }
}
const isCat = (param: Cat) => {
    if (param instanceof Cat) {
        console.log("yes, it's a cat.");
    }
    else {
        console.log("no, it's not a cat.");
    }
}


//problem --> 4
const addNumber = (mixedData: (number | string)[]): number => {
    let sum = 0;
    for (const item of mixedData) {
        if (typeof item === 'number') {
            sum = sum + item;
        }
        else {
            sum = sum;
        }
    }
    return sum;
}


//problem --> 5
interface Car {
    make: string;
    model: string;
    year: number;
}
interface Driver {
    name: string;
    licenseNumber: number;
}
const combinedTwoObject = (car: Car, driver: Driver) => {
    const newCombinedObject = {
        ...car, ...driver
    }
    return newCombinedObject;
}


// problem --> 6
const checkArrayOfNumber = (array: unknown): void => {
    if (Array.isArray(array)) {
        let sum = 0;
        for (const item of array) {
            if (typeof item === 'number') {
                sum = sum + item;
            }
            else {
                return console.log('Provided array contains NaN.');
            }
        }
        return console.log(`Sum is = ${sum}`);
    }
    else {
        return console.log('Not an array.')
    }
}


// problem --> 7
const findFirstOccurrence = <T>(array: T[], value: T): number => {
    const index = array.indexOf(value);
    if (index) {
        return index;
    }
    else {
        return -1;
    }
}


// problem --> 8
interface Product {
    name: string;
    price: number;
    quantity: number;
}
const costCalculator = (shoppingCart: Product[]): number => {
    let totalCost = 0;
    for (const item of shoppingCart) {
        totalCost = totalCost + item.price * item.quantity;
    }
    return totalCost;
}