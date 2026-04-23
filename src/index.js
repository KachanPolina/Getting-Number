'use strict';

function getNumber(number) {
    if(number === 1) return 1;
    if(number < 1 || !Number.isFinite(number)) return null;
    const expression1 = getNumber(number - 5);
    if (expression1 !== null) return '(' + expression1 + ' + 5)';
    if(number % 3 === 0) {
        const expression2 = getNumber(number / 3) 
        if(expression2 !== null) return '(' + expression2 + ' * 3)';
    }
    return null;
}

console.log(getNumber(19));
