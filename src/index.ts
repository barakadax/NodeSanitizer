'use strict';

// TODO: Add ';' sanitization for commands injection CWE-116

/**
 * Sanitize before console.log
 * Solves log injection, remove unprintable characters, sanitize special HTML characters
 */
export class Logging {
    private readonly spaces: RegExp;
    private readonly logInjection: RegExp;
    private readonly unprintableCharacters: RegExp;
    private readonly html: { [key: string]: string };

    constructor() {
        this.spaces = /\s+/g;
        this.logInjection = /%\d\w/g;
        this.unprintableCharacters = /[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g;
        this.html = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;",
            "\\": "&#92;"
        };
    }

    /**
     * Sanitize string before logging
     * @param input string you want to sanitize before you log
     * @param shouldTrim boolean that decide if to remove spaces from start, end and extra spaces in the string, default is false
     * @returns sanitized string
     */
    public sanitize(input: string, shouldTrim: boolean = false): string {
        let result = input.replace(this.unprintableCharacters, '');

        result = result.replace(this.logInjection, '');

        result = result.replace(/[&<>"'`=\/]/g, (s) => {
            return this.html[s];
        });

        if (shouldTrim) {
            result = result.replace(this.spaces, ' ').trim();;
        }

        return result;
    }
}
