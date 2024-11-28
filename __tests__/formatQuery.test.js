const { formatQuery } = require('../utils/formatQuery');

describe('Given a query string with no spaces, convert the string to a readable format', () => {
    test('Given "4+4", return "4 + 4"', () => {
        const string = "4+4";
        expect(formatQuery(string)).toBe('4 + 4');
    });
    test('Given "12/6-9+60*5", return "12 ÷ 6 - 9 + 60 × 5"', () => {
        const string = "12/6-9+60*5";
        expect(formatQuery(string)).toBe('12 ÷ 6 - 9 + 60 × 5');
    });
    test('Given "0.8+3.965*254.78/2.3-3.25", return "0.8 + 3.965 × 254.78 ÷ 2.3 - 3.25"', () => {
        const string = "0.8+3.965*254.78/2.3-3.25";
        expect(formatQuery(string)).toBe('0.8 + 3.965 × 254.78 ÷ 2.3 - 3.25');
    });
    test('Given "-9--9", return "-9 - -9"', () => {
        const string = "-9--9";
        expect(formatQuery(string)).toBe('-9 - -9');
    });
    test('Given "-64--64+100*85/5-100", return "-64 - -64 + 100 × 85 ÷ 5 - 100"', () => {
        const string = '-64--64+100*85/5-100';
        expect(formatQuery(string)).toBe('-64 - -64 + 100 × 85 ÷ 5 - 100');
    });
    test('Given "-1-1--1-1--1-1-1", return "-1 - 1 - -1 - 1 - -1 - 1 - 1"', () => {
        const string = '-1-1--1-1--1-1-1';
        expect(formatQuery(string)).toBe('-1 - 1 - -1 - 1 - -1 - 1 - 1');
    });
    test('Given "-1*-1", return "-1 × -1"', () => {
        const string = '-1*-1';
        expect(formatQuery(string)).toBe('-1 × -1');
    });
    test('Given "-0.25698*-7584+965.36--6.3/-9.25", return "-0.25698 × -7584 + 965.36 - -6.3 ÷ -9.25"', () => {
        const string = '-0.25698*-7584+965.36--6.3/-9.25';
        expect(formatQuery(string)).toBe('-0.25698 × -7584 + 965.36 - -6.3 ÷ -9.25');
    });
    test('Given "99 - 99 - 99", return "99 - 99 - 99"', () => {
        const string = '99 - 99 - 99';
        expect(formatQuery(string)).toBe('99 - 99 - 99');
    });
    test('Given "965×98", return "965 × 98"', () => {
        const string = '965×98';
        expect(formatQuery(string)).toBe('965 × 98');
    });
    test('Given "99÷99", return "99 ÷ 99"', () => {
        const string = '99÷99';
        expect(formatQuery(string)).toBe('99 ÷ 99');
    });
    test('Given "9*3.141592654", return "9 × π"', () => {
        const string = '9*3.141592654';
        expect(formatQuery(string)).toBe('9 × π');
    });
    test('Given "75.2/3.141592654+6*3.141592654+600", return "75.2 ÷ π + 6 × π + 600"', () => {
        const string = '75.2/3.141592654+6*3.141592654+600';
        expect(formatQuery(string)).toBe('75.2 ÷ π + 6 × π + 600');
    });
    test('Given "80056%620", return "80056 % 620"', () => {
        const string = '80056 % 620';
        expect(formatQuery(string)).toBe('80056 % 620');
    });
    test('Given "3**3", return "3 ^ 3"', () => {
        const string = '3**3';
        expect(formatQuery(string)).toBe('3 ^ 3');
    });
    test('Given "3**3**3", return "3 ^ 3 ^ 3"', () => {
        const string = '3**3**3';
        expect(formatQuery(string)).toBe('3 ^ 3 ^ 3');
    });
});
