const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let out = '';

    for (let i = 0; i < expr.length; i = i + 10) {
        let tmp1 = expr.substr(i, 10);
        let tmp2 = '';
        if (tmp1 === '**********') out += ' ';
        else {
            for (let h = 0; h < tmp1.length; h = h + 2) {
                let tmp3 = tmp1.substr(h, 2);
                if (tmp3 === '11') {
                    tmp2 += '-';
                } else if (tmp3 === '10') {
                    tmp2 += '.';
                }

            }
            out += MORSE_TABLE[tmp2];
        }
    }
    return out;
}

module.exports = {
    decode
}