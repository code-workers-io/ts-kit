import { getPreviousArrayValue } from './get-previous-array-value';
describe('getPreviousArrayValue', () => {
  it('should return the previous value', () => {
    const array = [1, 2, 3, 4, 5];
    expect(getPreviousArrayValue(array, 2)).toBe(1);
    expect(getPreviousArrayValue(array, 1)).toBe(1);
    expect(getPreviousArrayValue(array, 0)).toBe(1);
    expect(getPreviousArrayValue(array, 5)).toBe(4);
    expect(getPreviousArrayValue(array, 4)).toBe(3);
    expect(getPreviousArrayValue(array, 3)).toBe(2);
  });
});
