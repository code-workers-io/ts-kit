# @code-workers.io/ts-kit/utils

This package provides some utility functions for TypeScript.

## Usage
  
  ```typescript
  import { getNextArrayValue } from "@code-workers.io/ts-kit/utils";

  const array = [1, 2, 3];
  const nextValue = getNextArrayValue(array, 2); // 3
  ```

## Included functions

- `getNextArrayValue`: get the next value of an array
- `getPreviousArrayValue`: get the previous value of an array
- `accessProp`: access a property of an object
