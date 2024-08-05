export function whatsMyType<T>(arg: T): T {
  return arg
}

let myType = whatsMyType<string>('string');
let myType2 = whatsMyType<number>(1);
let myType3 = whatsMyType<boolean>(true);
let myType4 = whatsMyType({});
let myType5 = whatsMyType(["string", 1, true, {}]);
let myType6 = whatsMyType<Function>(() => {});
let myType7 = whatsMyType<number[]>([1, 2 ,3 ,4 ,5]);

console.log(myType);
console.log(myType2);
console.log(myType3);
console.log(myType4);
console.log(myType5);
console.log(myType6);
console.log(myType7);