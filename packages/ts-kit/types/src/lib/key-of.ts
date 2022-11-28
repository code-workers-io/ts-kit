/**
 * Returns the keys of an object as a union of string literals.
 *
 * @example
 * type Foo = { a: string, b: number };
 * type FooKeys = KeyOf<Foo>; // "a" | "b"
 */
export type KeyOf<T> = keyof T;
