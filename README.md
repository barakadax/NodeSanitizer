# Barakadax Sanitizer

[![npm](https://img.shields.io/npm/v/barakadax-sanitizer.svg)](https://www.npmjs.com/package/barakadax-sanitizer)
[![downloads](https://img.shields.io/npm/dt/barakadax-sanitizer.svg)](https://www.npmjs.com/package/barakadax-sanitizer)<br>
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
        Logging - <a href="https://cwe.mitre.org/data/definitions/117.html" target="_blank">CWE-117</a>
    </li>
</ul>

Logging class solves logs injection.
