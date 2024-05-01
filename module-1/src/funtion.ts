function add(num: number, num1: number) {
    return num + num1
}

console.log(add(23, 45));


const addNumber = (num: number, num1: number): number => {
    return num + num1
}
console.log(addNumber(12, 45));


//object =>funtion method :

const user = {
    name :'dipongkar',
    balance: 0 ,
    addBalence(balance:number):string{
        return(`new total balance: ${this.balance+ balance}`);
    }
}



const array:number[] = [12,34,556,78]

const newArray:number[] = array.map((Element:number):number=>Element*Element)