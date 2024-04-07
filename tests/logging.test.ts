import { Logging } from '../src';

test('All sanitization', () => {
    let logger = new Logging();
    let inputString = 'This %0a%0a INFO:+<tag>+==Example';
    let sanitizedString = logger.sanitize(inputString);

    expect(sanitizedString).toBe('This  INFO:+&lt;tag&gt;+&#x3D;&#x3D;Example');
});

test('All sanitization with trim', () => {
    let logger = new Logging();
    let inputString = 'This %0a%0a INFO:+<tag>+==Example';
    let sanitizedString = logger.sanitize(inputString, true);

    expect(sanitizedString).toBe('This INFO:+&lt;tag&gt;+&#x3D;&#x3D;Example');
});

test('Log injection', () => {
    let logger = new Logging();
    let inputString = 'This is a %1w test string %2x';
    let sanitizedString = logger.sanitize(inputString);

    expect(sanitizedString).toBe('This is a  test string ');
});

test('Trimming', () => {
    let logger = new Logging();
    let inputString = '  This is a  test string ';
    let sanitizedString = logger.sanitize(inputString, true);

    expect(sanitizedString).toBe('This is a test string');
});

test('Doesn\'t remove unprintable characters', () => {
    let logger = new Logging();
    let inputString = 'This is a\0 test \n string';
    let sanitizedString = logger.sanitize(inputString);

    expect(sanitizedString).toBe('This is a\0 test \n string');
});

test('Remove HTML characters', () => {
    let logger = new Logging();
    let inputString = '<tag>& != |</tag>';
    let sanitizedString = logger.sanitize(inputString);

    expect(sanitizedString).toBe('&lt;tag&gt;&amp; !&#x3D; |&lt;&#x2F;tag&gt;');
});
