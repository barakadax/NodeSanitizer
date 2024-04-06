# Barakadax Sanitizer

NPM package for specific sanitize.<br><br>
[![npm](https://img.shields.io/npm/v/barakadax-sanitizer.svg)](https://www.npmjs.com/package/barakadax-sanitizer)
<br><br>
How to install:

```shell
npm i barakadax-sanitizer
```
<br><br>
How to use:

```shell
import { Logging } from './logs';

let logger = new Logging();
let inputString = 'This is a %1w test string %2x';
let sanitizedString = logger.sanitize(inputString);

console.log('Sanitized String:', sanitizedString);
```

## [CWE-117](https://cwe.mitre.org/data/definitions/117.html)

Logging class solves logs injection.
