"use strict";
function add(num, num1) {
    return num + num1;
}
console.log(add(23, 45));
const addNumber = (num, num1) => {
    return num + num1;
};
console.log(addNumber(12, 45));
//object =>funtion method :
const user = {
    name: 'dipongkar',
    balance: 0,
    addBalence(balance) {
        return (`new total balance: ${this.balance + balance}`);
    }
};
const array = [12, 34, 556, 78];
const newArray = array.map((Element) => Element * Element);
