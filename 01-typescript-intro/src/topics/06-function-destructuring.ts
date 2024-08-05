
interface Product {
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


function taxCalculation(options: TaxCalculation): number[] {
    let total = 0;
    options.products.forEach(product => {
        total += product.price;
    }
    );
    return [total, total * options.tax];
}

const [total, totalTax] = taxCalculation(
    { 
        tax, 
        products: shoppingCart 
    }
);