let money: number = 786;
let myName: string = 'Lutfor';
console.log(money, 'OK', myName);

// array and srring
const output: number = add(45, 65);
const numbers: number[] = [5, 12, 10, 65, 132, 1, 2, 3, 21];
const string: string[] = ['habib', 'kamal', 'labib'];
let max = 0;
for (const number of numbers) {
    if (number > max) {
        max = number;
    }
}

// object
type person = {
    name: string,
    age: number,
    salary: number
}
const student: person = {
    name: 'Lutfor',
    age: 23,
    salary: 4500
}
// other way
const employee: {name: string, age: number, salary: number} = {
    name: 'Hasan',
    age: 29,
    salary: 45
}

// function and array function
function add(first: number, second: number): number{
    const result = first + second;
    return result;
}

const add2 = (num1: number, num2: number): number => num1 + num2;


// *** interface ***
interface Player{
    name: string,
    club: string,
    salary: number,
    wife?: string       //if no exists, then not use
}
const messy: Player={
    name: 'L Messy',
    club: 'Abahoni',
    salary: 1200,
    wife: 'Nosimon'
}
const hasan: Player ={
    name: 'hasan',
    club: 'Abahoni',
    salary: 1200,
}
// extends use to add another interface
interface Developer extends person {
    language: string,
    codeEditor: string,
    typingSpeed: number
}
const karim: Developer = {
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65,
    name: 'karim',
    age: 25,
    salary: 2500
}

// class ---->
class Car {
    model: string;
    price: number;
    private _millage: number;       //use for don't show
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 10000;
    }
    getActualMillage(): number{
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(tax: number): number{
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyota', 100000);
const totalPrice: number = toyota.getTotalPrice(25);