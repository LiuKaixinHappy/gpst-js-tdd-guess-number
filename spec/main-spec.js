const main = require('../main/main');

describe('main()', () => {
    it('should get 4A0B if user guess right both num and pos', function () {
        let result = main.score('1234', '1234');
        let expected = '4A0B';
        expect(result).toEqual(expected);
    });
});