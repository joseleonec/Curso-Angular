export class Person {

    // public name: string;
    // private address: string;

    constructor(public name: string, private address: string) {
        this.name = name;
        this.address = address;
    }


}

const person = new Person("John", "123 Elm Street");

console.log(person.name);
console.log(person.address);