export class Person {

    // public name: string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string = "NA"
    ) { }


}

const person = new Person("John", "123 Elm Street");

console.log(person.name);
console.log(person.address);