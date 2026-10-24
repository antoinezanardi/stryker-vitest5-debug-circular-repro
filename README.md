# Stryker + Vitest 5: `--logLevel debug` circular JSON repro

`@stryker-mutator/vitest-runner` 10.1.1 + Vitest 5.0.5 crashes during
initialization with `TypeError: Converting circular structure to JSON` when
Stryker runs with `--logLevel debug`.

## Steps

```bash
pnpm install
pnpm mutation:dry    # passes
pnpm mutation:debug  # crashes with the circular JSON error
```

## Versions

- `@stryker-mutator/core`: `10.1.1`
- `@stryker-mutator/vitest-runner`: `10.1.1`
- `vitest`: `5.0.5`
- Node: `26.12.1`

## Stack

```
TypeError: Converting circular structure to JSON
--> starting at object with constructor 'Object'
| property 'resolvedProjects' -> object with constructor 'Array'
| index 0 -> object with constructor 'Object'
| property 'viteConfig' -> object with constructor 'Object'
--- property 'test' closes the circle
    at JSON.stringify (<anonymous>)
    at VitestTestRunner.init (.../@stryker-mutator/vitest-runner/dist/src/vitest-test-runner.js:153:57)
```

## Workaround

Don't pass `--logLevel debug` with the Vitest runner.
