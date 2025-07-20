const rating = require('../index');

describe('Star Rating', () => {
  test('returns correct rating strings', () => {
    expect(rating(0)).toBe('☆☆☆☆☆');
    expect(rating(1)).toBe('★☆☆☆☆');
    expect(rating(2.5)).toBe('★★⯪☆☆');
    expect(rating(4.5)).toBe('★★★★⯪');
    expect(rating(5)).toBe('★★★★★');
  });

  test('throws on invalid input', () => {
    expect(() => rating(-1)).toThrow();
    expect(() => rating(5.5)).toThrow();
    expect(() => rating('3')).toThrow();
    expect(() => rating(NaN)).toThrow();
  });
});
