function add(a: number, b: number): number {
    return a + b;
}

const sum: String = add(4, 6).toString();

console.log(sum);


const addNumbers = (a: number, b: number): number => {
    return a + b;
}

const multiply = (a: number, b: number, base: number = 2): number => {
    return a * b * base;
}

const result = multiply(10, 5);

console.log(result);

const multiplyArrow = (a: number, b?: number, base: number = 2): 
number => a * base;

const resultArrow = multiplyArrow(10);
console.log(resultArrow);


interface Character {
    name: string;
    hp: number;
    showHp: () => void;

}

const heal = (character: Character, heal: number): string => {
    character.hp += heal;
    return `${character.name} healed ${character.hp} points`;
}

const character: Character= {
    name: "Strider",
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
};

console.log(heal(character, 20));


export { };