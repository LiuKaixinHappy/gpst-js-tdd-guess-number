const main = require('../main/main');

describe('main()', () => {
    it('should get 4A0B if user guess right both num and pos', function () {
        let result = main.score('1234', '1234');
        let expected = '4A0B';
        expect(result).toEqual(expected);
    });

    it('should get 2A2B if 2 right 2 pos wrong', function () {
        let result = main.score('1243', '1234');
        let expected = '2A2B';
        expect(result).toEqual(expected);
    });
});