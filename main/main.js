function is_contain(system, elem) {
    return system.indexOf(elem) >= 0;
}

function score(system, guess) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < system.length; i++) {
        if (system[i] === guess[i]) {
            a += 1;
        } else if (is_contain(system, guess[i])) {
            b += 1;
        }
    }
    return a + 'A' + b + 'B';
}

function get_no_repeat_int(length) {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    array.sort((a, b) => {
        return Math.random() > .5 ? -1 : 1
    });
    return array[0] === 0 ? array.slice(1, 1 + length) : array.slice(0, 0 + length).join('');
}

function main(guess) {
    let random = get_no_repeat_int(4);
    console.log('System：' + random + '\nYour guess:' + guess + '\nYour score：' + score(random, guess));
}

module.exports = {
    main, score, get_no_repeat_int
};