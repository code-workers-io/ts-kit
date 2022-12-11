/**
 * Access nested object properties using .-notation.
 *
 * @param arg
 * @param prop
 *
 * @example
 * const obj = {
 *  a: {
 *   b: {
 *    c: 1,
 *    d: 2,
 *      },
 *    },
 *  };
 *
 * accessProp(obj, 'a.b.c'); // 1
 */
export function accessProp<T>(arg: T, prop: string): any {
  const separator = '.';
  if (!arg || !prop) {
    return null;
  }

  const keys: string[] = prop.split(separator);

  if (!keys) {
    throw new Error('Something is wrong');
  }

  return keys.reduce((o, p) => o && o[p], arg);
}
