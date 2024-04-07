'use strict';

/**
 * Sanitize before console.log
 * Solves: CWE-117
 */
export class Logging {
    private readonly spaces: RegExp;
    private readonly logInjection: RegExp;
    private readonly html: { [key: string]: string };

    constructor() {
        this.spaces = /\s+/g;
        this.logInjection = /%\d\w/g;
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
        let result = input.replace(this.logInjection, '');

        result = result.replace(/[&<>"'`=\/]/g, (s) => {
            return this.html[s];
        });

        if (shouldTrim) {
            result = result.replace(this.spaces, ' ').trim();;
        }

        return result;
    }
}
