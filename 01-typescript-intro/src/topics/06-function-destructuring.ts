
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Samsung Galaxy S10",
    price: 1000
}

const tablet: Product = {
    description: "iPad Pro",
    price: 1200
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

interface TaxCalculation {
    tax: number;
    products: Product[];
}


// function taxCalculation({tax, products}: TaxCalculation): number[] {
export function taxCalculation(options: TaxCalculation): number[] {
    let total = 0;
    const {tax, products} = options;
    products.forEach( 
        ({price}) => {
            total += price;
        }
    );
    return [total, total * tax, total + total * tax];
}

const [total, totalTax, grandTotal] = taxCalculation(
    { 
        tax, 
        products: shoppingCart 
    }
);

// console.log(`Total: ${total}`);
// console.log(`Total Tax: ${totalTax}`);
// console.log(`Grand Total: ${grandTotal}`);