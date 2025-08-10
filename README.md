# Shopping Cart Price Calculator

This project is a TypeScript implementation of a shopping basket price calculator, based on the following problem statement:

## Problem Statement

Write a program in TypeScript/JAVA that calculates the price of a basket of shopping.

- Items are presented one at a time, in a list, identified by name (e.g., "Apple", "Banana").
- Multiple items are present multiple times in the list (e.g., `["Apple", "Apple", "Banana"]` is a basket with two apples and one banana).

### Item Pricing

- **Apples**: 35p each
- **Bananas**: 20p each
- **Melons**: 50p each, but are available as ‘buy one get one free’
- **Limes**: 15p each, but are available in a ‘three for the price of two’ offer

## Solution Approach

- The program takes a list of item names as input.
- It calculates the total cost by applying the relevant pricing rules and offers for each item.
- The solution is implemented in TypeScript and can be run using Node.js.

## How to Run

1. **Install dependencies** (if any):
   ```sh
   npm install
   ```
2. **Run the program**:
   ```sh
   npx ts-node shopping-cart.ts
   ```
   (Or use your preferred method to execute the TypeScript file.)

## Example

Input:

```typescript
["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"];
```

Output:

```
Total cost: 1.65
```

## Notes

- The solution was developed in approximately two hours.
- For any questions or improvements, please open an issue or submit a pull request.

## Uploading to GitHub

To upload this code to GitHub:

1. Create a new repository on [GitHub](https://github.com/).
2. Initialize your local project as a git repository:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Share the repository link as needed.
