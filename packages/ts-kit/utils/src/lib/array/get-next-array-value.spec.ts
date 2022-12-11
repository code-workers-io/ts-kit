import { getNextArrayValue } from './get-next-array-value';

describe('getNextArrayValue', () => {
  it('should return the next value', () => {
    const array = [1, 2, 3, 4, 5];
    expect(getNextArrayValue(array, 2)).toBe(3);
    expect(getNextArrayValue(array, 3)).toBe(4);
    expect(getNextArrayValue(array, 4)).toBe(5);
    expect(getNextArrayValue(array, 1)).toBe(2);
  });
});
