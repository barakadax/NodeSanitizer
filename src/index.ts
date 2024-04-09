'use strict';

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
        let result: string = input.replace(this.unprintableCharacters, '')
            .replace(this.logInjection, '');

        result = result.replace(/[&<>"'`=\/]/g, (s) => {
            return this.html[s];
        });

        if (shouldTrim) {
            return result.replace(this.spaces, ' ').trim();;
        }

        return result;
    }
}

/**
 * Sanitize before writing/reading files
 * Solves path traversal and injections
 */
export class Filing {
    private readonly dots: RegExp;
    private readonly illegalCharacters: RegExp;
    private readonly unprintableCharacters: RegExp;
    private readonly windowsSavedWords: RegExp;
    private readonly windowsNoExtension: RegExp;

    constructor() {
        this.dots = /^\.+$/;
        this.illegalCharacters = /[\/\?<>\\:\*\|"]/g;
        this.unprintableCharacters = /[\x00-\x1f\x80-\x9f]/g;
        this.windowsSavedWords = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
        this.windowsNoExtension = /[\. ]+$/;
    }

    /**
     * Sanitize string before files usage
     * @param input string you want to sanitize
     * @returns sanitized string
     */
    public sanitize(input: string, shouldTrim: boolean = false): string {
        return input.replace(this.dots, '')
            .replace(this.illegalCharacters, '')
            .replace(this.unprintableCharacters, '')
            .replace(this.windowsSavedWords, '')
            .replace(this.windowsNoExtension, '');
    }
}
