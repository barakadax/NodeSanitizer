'use strict';

import { Filing } from '../src';

let filing: Filing;

beforeAll(() => {
    filing = new Filing();
});

test('Remove traversal', () => {
    let filePath = '../myFolder/.\../myPic.png';
    let sanitizedFilePath = filing.sanitize(filePath);

    expect(sanitizedFilePath).toBe('..myFolder...myPic.png');
});

test('Remove excessive dots', () => {
    let filePath = 'myFile\../.';
    let sanitizedFilePath = filing.sanitize(filePath);

    expect(sanitizedFilePath).toBe('myFile');
});

test('Remove specific characters', () => {
    let filePath = 'myFile?<>*:.png';
    let sanitizedFilePath = filing.sanitize(filePath);

    expect(sanitizedFilePath).toBe('myFile.png');
});

test('Remove windows saved words', () => {
    let filePath = 'aux.png';
    let sanitizedFilePath = filing.sanitize(filePath);

    expect(sanitizedFilePath).toBe('');
});

test('Remove windows no extension file remove dot', () => {
    let filePath = 'a.';
    let sanitizedFilePath = filing.sanitize(filePath);

    expect(sanitizedFilePath).toBe('a');
});
