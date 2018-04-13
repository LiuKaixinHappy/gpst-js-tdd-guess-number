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

    it('should get 0A4B if 0 right 4 pos wrong', function () {
        let result = main.score('1243', '4321');
        let expected = '0A4B';
        expect(result).toEqual(expected);
    });

    it('should get 0A0B if all wrong', function () {
        let result = main.score('1243', '6578');
        let expected = '0A0B';
        expect(result).toEqual(expected);
    });

    it('should get random 4 int without repeat', function () {
        let rand = main.get_no_repeat_int(4);
        let is_repeat = false;
        for (let i = 0; i < rand.length; i++) {
            if (rand.indexOf(rand[i]) !== rand.lastIndexOf(rand[i])) {
                is_repeat = true;
            }
        }
        expect(rand.length).toEqual(4);
        expect(is_repeat).toEqual(false);
    });
});