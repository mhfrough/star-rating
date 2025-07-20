# ⭐ @mhfrough/star-rating

> Tiny, dependency-free function to generate 5-star ratings with optional half-star (`★⯪☆`) support.

---

## ✨ Features

- Supports decimal ratings (e.g., `3.5` → `★★★⯪☆`)
- Unicode-based, lightweight, and zero dependencies
- Works in both Node.js and frontend environments
- Includes TypeScript definitions

---

## 📦 Installation

```bash
npm install @mhfrough/star-rating
```

---

## 🔧 Usage

```js
const rating = require('@mhfrough/star-rating');

console.log(rating(0));     // ☆☆☆☆☆
console.log(rating(2));     // ★★☆☆☆
console.log(rating(3.5));   // ★★★⯪☆
console.log(rating(5));     // ★★★★★
```

---

## 📘 API

### `rating(n: number): string`

| Parameter | Type   | Description                            |
|-----------|--------|----------------------------------------|
| `n`       | number | A value from `0` to `5` (can be decimal)|

Returns a string like `★★★⯪☆` representing the rating.

Throws an error if `n` is not a valid number between 0 and 5.

---

## 🧪 Example Output

| Input | Output    |
|-------|-----------|
| 0     | ☆☆☆☆☆     |
| 1.5   | ★⯪☆☆☆     |
| 3     | ★★★☆☆     |
| 4.5   | ★★★★⯪     |
| 5     | ★★★★★     |

---

## ✅ TypeScript Support

```ts
import rating from '@mhfrough/star-rating';

const stars: string = rating(4.5); // "★★★★⯪"
```

Type definitions are included automatically.

---

## 📁 File Structure

```
index.js         // Main function
index.d.ts       // Type definitions
README.md        // This file
LICENSE          // MIT License
```

---

## 🪪 License

MIT © [mhfrough](https://github.com/mhfrough)

---

## 🔗 Links

- [GitHub Repository](https://github.com/mhfrough/star-rating)
- [Report Issues](https://github.com/mhfrough/star-rating/issues)
