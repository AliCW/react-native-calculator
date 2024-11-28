const { calc } = require("a-calc")

describe('Given a string representing numbers & symbols, split the string & return the accumilation', () => {
    test('Given "1+1", return 2 - single sum, single digit (addition)', () => {
        const string = '1+1';
        expect(calc(string)).toBe("2");
    });
    test('Given "2-1", return 1 - single sum, single digit (subtraction)', () => {
        const string = '2-1';
        expect(calc(string)).toBe("1");
    });
    test('Given "2*2", return 4 - single sum, single digit (multiplication)', () => {
        const string = '2*2';
        expect(calc(string)).toBe("4");
    });
    test('Given "9/3", return 3 - single sum, single digit (division)', () => {
        const string = '9/3';
        expect(calc(string)).toBe("3");
    });
    test('Given "10+10", return 20 - single sum, two digits (addition)', () => {
        const string = '10+10';
        expect(calc(string)).toBe("20");
    });
    test('Given "30-20", return 10 - single sum, two digits (subtraction)', () => {
        const string = '30-20';
        expect(calc(string)).toBe("10");
    });
    test('Given "10*10", return 100 - single sum, two digits (multiplication)', () => {
        const string = "10*10";
        expect(calc(string)).toBe("100");
    });
    test('Given "10/10", return 1 - single sum, two digits (division)', () => {
        const string = '10/10';
        expect(calc(string)).toBe("1");
    });
    test('Given "1+1+1", return 3 - two sums, single digit (addition)', () => {
        const string = '1+1+1';
        expect(calc(string)).toBe("3");
    });
    test('Given "8-2-2", return 4 - two sums, single digit (subtraction)', () => {
        const string = '8-2-2';
        expect(calc(string)).toBe("4");
    });
    test('Given "2*2*2", return 8 - two sums, single digit (multiplication)', () => {
        const string = '2*2*2';
        expect(calc(string)).toBe("8");
    });
    test('Given "8/2/2", return 2 - two sums, single digit (division)', () => {
        const string = '8/2/2';
        expect(calc(string)).toBe("2");
    });
    test('Given "80+120-90", return 2 - two sums, many digits (addition & subtraction)', () => {
        const string = '80+120-90';
        expect(calc(string)).toBe("110");
    });
    test('Given "105+5*11", return 160 - two sums, many digits (addition & multiplication)', () => {
        const string = '105+5*11';
        expect(calc(string)).toBe("160");
    });
    test('Given "100+20/12", return 10 - two sums, many digits (addition & division)', () => {
        const string = '100+20/12';
        expect(calc(string)).toBe("101.66666666666666666667");
    });
    test('Given "600-132+63", return 531 - two sums, many digits (subtraction & addition)', () => {
        const string = '600-132+63';
        expect(calc(string)).toBe("531");
    });
    test('Given "690-65*12", return -90 - two sums, many digits (subtraction & multiplication)', () => {
        const string = '690-65*12';
        expect(calc(string)).toBe("-90");
    });
    test('Given "8526-526/8", return 8460.25 - two sums, many digits (subtraction & division)', () => {
        const string = '8526-526/8';
        expect(calc(string)).toBe("8460.25");
    });
    test('Given "52*12+38", return 662 - two sums, many digits (multiplication & addition)', () => {
        const string = '52*12+38';
        expect(calc(string)).toBe("662");
    });
    test('Given "45*30-900", return 450 - two sums, many digits (multiplication & subtraction)', () => {
        const string = '45*30-900';
        expect(calc(string)).toBe("450");
    });
    test('Given "90*10/450", return 2, - two sums, many digits (multiplication & division)', () => {
        const string = '90*10/450';
        expect(calc(string)).toBe("2");
    });
    test('Given "900/45+60", return 80 - two sums, many digits (division & addition)', () => {
        const string = "900/45+60";
        expect(calc(string)).toBe("80")
    });
    test('Given "600/6-50", return 50 - two sums, many digits (division & subtraction)', () => {
        const string = "600/6-50";
        expect(calc(string)).toBe("50")
    });
    test('Given "700/7*52", return 5200 - two sums, many digits (division & multiplcation)', () => {
        const string = "700/7*52";
        expect(calc(string)).toBe("5200");
    });
    test('Given "-8+9", return 1 - single sum, leading negative number input', () => {
        const string = "-8+9"
        expect(calc(string)).toBe("1");
    });
    test('Given "18-13-(2+(10-9))", return 2" - single sum, bracket example', () => {
        const string = '18-13-(2+(10-9))';
        expect(calc(string)).toBe('2');
    });
    test('Given "3**5", return 243', () => {
        const string = '3**5';
        expect(calc(string)).toBe('243');
    });
});