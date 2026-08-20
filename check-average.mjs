import { averagePrice } from './src/utils/prices.js';

const samples = [
  { name: 'three hours', data: [{ price: 10 }, { price: 20 }, { price: 30 }], expected: 20 },
  { name: 'two hours', data: [{ price: 10 }, { price: 20 }], expected: 15 },
  { name: 'empty', data: [], expected: 0 },
];

for (const s of samples) {
  const result = averagePrice(s.data);
  console.log(`${s.name} -> expected: ${s.expected}, actual: ${result}`);
}

// Quick manual check for arrays with missing hours (should divide by actual length)
const sparse = [{ price: 5 }, { price: 15 }, /* missing hours */ { price: 10 }];
console.log('sparse -> expected: 10, actual:', averagePrice(sparse));

console.log('Done');
