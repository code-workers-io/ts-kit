/**
 * Get the path to a property in a type separated by dots.
 *
 * @example
 * type Foo = { a: { b: { c: number } } };
 * type Path = PropPath<Foo, number>; // 'a.b.c'
 */
export type PropPath<T, V> = T extends V
  ? ''
  : {
      [K in Extract<keyof T, string>]: Dot<K, PropPath<T[K], V>>;
    }[Extract<keyof T, string>];

type Dot<T extends string, U extends string> = '' extends U ? T : `${T}.${U}`;
