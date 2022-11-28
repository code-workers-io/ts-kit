# @code-workers.io/ts-types

A collection of TypeScript utitlty types to make your life easier.

## Installation

```bash
npm i @code-workers.io/ts-types
``` 

## Usage

```typescript
import {KeyOf} from '@code-workers.io/ts-types';

type MyType = {
  foo: string;
  bar: number;
};

const property = KeyOf<MyType>; // 'foo'
```

## Available Types

- `KeyOf`: get the keys of an type as string literal
- `Nullable`: shorthand for  `T | null`
- `Optional`: shorthand for `T | null | undefined`

## strict-types

A utility library for strict TypeScript applications. 

In strict mode you commonly have union types for variables which usually consists of `type | undefined |null`,
where `type` is e.g. `string`. 

This library is providing for each primitive data type a strict type:
* `StrictString`
* `StrictNumber`
* `StrictBoolean`
* `StrictArray`
* `StrictObject`
