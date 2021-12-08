"use strict";
let money = 786;
let myName = 'Lutfor';
console.log(money, 'OK', myName);
// array and srring
const output = add(45, 65);
const numbers = [5, 12, 10, 65, 132, 1, 2, 3, 21];
const string = ['habib', 'kamal', 'labib'];
let max = 0;
for (const number of numbers) {
    if (number > max) {
        max = number;
    }
}
const student = {
    name: 'Lutfor',
    age: 23,
    salary: 4500
};
// other way
const employee = {
    name: 'Hasan',
    age: 29,
    salary: 45
};
// function and array function
function add(first, second) {
    const result = first + second;
    return result;
}
const add2 = (num1, num2) => num1 + num2;
const messy = {
    name: 'L Messy',
    club: 'Abahoni',
    salary: 1200,
    wife: 'Nosimon'
};
const hasan = {
    name: 'hasan',
    club: 'Abahoni',
    salary: 1200,
};
const karim = {
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65,
    name: 'karim',
    age: 25,
    salary: 2500
};
// class ---->
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 10000;
    }
    getActualMillage() {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyota', 100000);
const totalPrice = toyota.getTotalPrice(25);
