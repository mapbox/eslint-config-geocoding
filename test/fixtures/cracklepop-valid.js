'use strict';

function cracklePop() {
    let i;
    let text = '';
    for (i = 0; i < 101; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            text += 'CracklePop\n';
        } else if (i % 3 === 0) {
            text += 'Crackle\n';
        } else if (i % 5 === 0) {
            text += 'Pop\n';
        } else {
            text += i + '\n';
        }
    }
    console.log(text);
}

cracklePop();

