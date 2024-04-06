# Barakadax Sanitizer

[![npm](https://img.shields.io/npm/v/barakadax-sanitizer.svg)](https://www.npmjs.com/package/barakadax-sanitizer)
[![downloads](https://img.shields.io/npm/dt/barakadax-sanitizer.svg)](https://www.npmjs.com/package/barakadax-sanitizer)
[![CodeQL](https://github.com/barakadax/NodeSanitizer/actions/workflows/codeql.yml/badge.svg)](https://github.com/barakadax/NodeSanitizer/actions/workflows/codeql.yml)
[![Dependency review](https://github.com/barakadax/NodeSanitizer/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/barakadax/NodeSanitizer/actions/workflows/dependency-review.yml)<br>
NPM package for sanitization to solve CWEs.<br>

How to install:

```shell
npm i barakadax-sanitizer
```

## Classes and what they solves:

<ul>
    <li>
        Logging - <a href="https://cwe.mitre.org/data/definitions/117.html" target="_blank">CWE-117</a>
    
```shell
import { Logging } from 'barakadax-sanitizer';

let logger = new Logging();
let inputString = 'This is a %1w test string %2x';
let sanitizedString = logger.sanitize(inputString);

console.log('Sanitized String:', sanitizedString);
```

</li>
</ul>

