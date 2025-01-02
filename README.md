# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion. When performing arithmetic operations, JavaScript's loose typing can lead to unexpected string concatenation instead of numerical addition if the operands have different types.

## Bug Description
The `foo` function adds a number and a string, resulting in string concatenation ("12"). The `bar` function explicitly parses both arguments as integers before adding, producing the correct numerical result (3).

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js, browser console).

## Solution
The `bugSolution.js` file demonstrates how to correctly handle such cases by explicitly converting both operands to numbers before performing the addition. This should always be done when performing arithmetic operation with user inputs or from an external sources to prevent unexpected behaviour or security vulnerabilities.