'use strict';

/**
 * Solves CWE-117
 */
export class Logging {
    private readonly spaces: RegExp;
    private readonly cwe117: RegExp;

    constructor() {
        this.spaces = /\s+/g;
        this.cwe117 = /%\d\w/g;
    }

    /**
     * Sanitize string before logging
     * @param input string you want to sanitize before you log
     * @returns sanitized string
     */
    sanitize(input: string): string {
        return input.replace(this.cwe117, '').replace(this.spaces, ' ');
    }
}
