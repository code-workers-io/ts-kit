# @code-workers.io/ts-guards

This library provides a small set of utility functions for checking the types of various
data types like: object, array, number, boolean and string.

## Get started

```typescript
import { isString } from "@code-workers.io/ts-kit/guards";

// somewhere in your code
function heavyComputation(arg: any) {
  if (isString(arg)) {
    // do something
  }
}
```

### Important hint
The utility function `isObject` will *not* return `true` for `null` and `array`'s. This is by design.

The default JavaScript-behavior of treating arrays and also null-values as objects, is in a lot of
cases not what you usually want. To prevent this you, usually need additional checks like
`if (typeof something === 'object' && !Array.isArray(something))`. This library will already take care of such things.

## Included type guards
* `isArray`
* `isObject`
* `isBoolean`
* `isNumber`
* `isString`
* `isFile`
