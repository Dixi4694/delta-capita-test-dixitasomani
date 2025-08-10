type OfferType = 'NONE' | 'BUY_ONE_GET_ONE_FREE' | 'THREE_FOR_TWO';

interface Product {
  name: string;
  price: number; // in pence
  offer?: OfferType;
}

class ShoppingCart {
  private products: Map<string, Product> = new Map();

  constructor(products: Product[]) {
    products.forEach((p) => this.products.set(p.name.toLowerCase(), p));
  }

  calculateTotal(items: string[]): number {
    // Count quantities
    const itemCounts: Map<string, number> = new Map();
    items.forEach((item) => {
      const key = item.toLowerCase();
      if (!this.products.has(key)) {
        throw new Error(`Unknown product: ${item}`);
      }
      itemCounts.set(key, (itemCounts.get(key) || 0) + 1);
    });

    // Calculate cost with offers applied
    let total = 0;
    for (const [name, qty] of itemCounts) {
      const product = this.products.get(name)!;
      total += this.applyOffer(product, qty);
    }

    return total;
  }

  private applyOffer(product: Product, quantity: number): number {
    switch (product.offer) {
      case 'BUY_ONE_GET_ONE_FREE':
        return Math.ceil(quantity / 2) * product.price;
      case 'THREE_FOR_TWO':
        const setsOfThree = Math.floor(quantity / 3);
        const remaining = quantity % 3;
        return (setsOfThree * 2 * product.price) + (remaining * product.price);
      default:
        return quantity * product.price;
    }
  }
}

// Example usage
const products: Product[] = [
  { name: 'Apple', price: 35, offer: 'NONE' },
  { name: 'Banana', price: 20, offer: 'NONE' },
  { name: 'Melon', price: 50, offer: 'BUY_ONE_GET_ONE_FREE' },
  { name: 'Lime', price: 15, offer: 'THREE_FOR_TWO' },
];

const cart = new ShoppingCart(products);

//test input 1
const basket = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
const total = cart.calculateTotal(basket);

console.log(`Total: ${total}p`);

//test input 2
const basket1 =  ['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
const total1 = cart.calculateTotal(basket1);

console.log(`Total: ${total1}p`);

//test input 3
const basket2 = ['Apple', 'Banana', 'Melon', 'Melon', 'Lime'];
const total2 = cart.calculateTotal(basket2);

console.log(`Total: ${total2}p`);


//test input 4
const basket3 = ['Apple', 'Apple', 'Banana', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime'];
const total3 = cart.calculateTotal(basket3);

console.log(`Total: ${total3}p`);