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

function main() {
};

module.exports = {
    main, score
};