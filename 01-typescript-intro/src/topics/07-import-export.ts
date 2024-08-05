import { Product } from "./06-function-destructuring";
import { taxCalculation } from "./06-function-destructuring";
const tax = 0.15;

const shoppingCart: Product[] = [
    {
        description: "Samsung Galaxy S10",
        price: 1000
    },
    {
        description: "iPad Pro",
        price: 2000
    }
];

const [total, totalTax, grandTotal] = taxCalculation(
    { 
        tax, 
        products: shoppingCart 
    }
);

console.log(`Total: ${total}`);
console.log(`Total Tax: ${totalTax}`);
console.log(`Grand Total: ${grandTotal}`);