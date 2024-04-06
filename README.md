# Barakadax Sanitizer

[![npm](https://img.shields.io/npm/v/barakadax-sanitizer.svg)](https://www.npmjs.com/package/barakadax-sanitizer)
[![downloads](https://img.shields.io/npm/dt/barakadax-sanitizer.svg)](https://www.npmjs.com/package/barakadax-sanitizer)<br><br>
NPM package for specific sanitization to solve CWEs.<br><br>

How to install:

```shell
npm i barakadax-sanitizer
```
<br>
How to use:

```shell
import { Logging } from './logs';

let logger = new Logging();
let inputString = 'This is a %1w test string %2x';
let sanitizedString = logger.sanitize(inputString);

console.log('Sanitized String:', sanitizedString);
```

## Classes and what they solves:

<ul>
    <li>
        Logging - [CWE-117](https://cwe.mitre.org/data/definitions/117.html)
    </li>
</ul>

Logging class solves logs injection.
