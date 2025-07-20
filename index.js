/**
 * Generate a 5-star rating string with optional half-star.
 * @param {number} n - A number between 0 and 5 (inclusive).
 * @returns {string} Star string (e.g., "★★★⯪☆").
 * @throws {Error} If input is not a number between 0 and 5.
 */
const rating = n => {
  if (typeof n !== 'number' || isNaN(n) || n < 0 || n > 5)
    throw new Error('Rating must be a number between 0 and 5.');

  const fullStars = Math.floor(n);
  const hasHalfStar = n % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return '★'.repeat(fullStars) + (hasHalfStar ? '⯪' : '') + '☆'.repeat(emptyStars);
};

export default rating;
