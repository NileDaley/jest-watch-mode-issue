# ts-jest-issue

A minimal reproduction of [this issue](https://github.com/facebook/jest/issues/8534)

## Reproduction steps

-   Download the repo
-   Install dependencies with `yarn`
-   Run `yarn test` and the test will fail
-   Run `yarn test --watch` and an error will be thrown
