export class Person {

    // public name: string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string = "NA"
    ) { }

}

// export class Employee extends Person {
    
//         constructor(
//             name: string,
//             address: string,
//             public salary: number,
//             public title: string
//         ) {
//             super(name, address);
//         }
    
// }
export class Employee {
    
        constructor(
            name: string,
            address: string,
            public salary: number,
            public title: string,
            public person: Person
        ) {}
    
}

const person = new Person("John", "123 Elm Street");
const employee = new Employee("Jane", "456 Elm Street", 100000, "Software Engineer", person);
console.log(person);
console.log(employee);