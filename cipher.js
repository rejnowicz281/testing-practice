const z_code = "z".charCodeAt(0);
const a_code = "a".charCodeAt(0);
const A_code = "A".charCodeAt(0);
const Z_code = "Z".charCodeAt(0);

function cipher(text, key) {
    let shiftedText = "";
    for (let i = 0; i < text.length; i++) {
        shiftedText += shift(text[i], key);
    }
    return shiftedText;
}

function shift(char, key) {
    let charCode = char.charCodeAt(0);
    let alphabetStartCode;
    let alphabetEndCode;

    if (charCode >= a_code && charCode <= z_code) {
        alphabetStartCode = a_code;
        alphabetEndCode = z_code;
    } else if (charCode >= A_code && charCode <= Z_code) {
        alphabetStartCode = A_code;
        alphabetEndCode = Z_code;
    } else {
        return char;
    }

    let shiftedCode = charCode + key;

    while (shiftedCode > alphabetEndCode || shiftedCode < alphabetStartCode) {
        if (key < 0) {
            shiftedCode += 26;
        } else {
            shiftedCode -= 26;
        }
    }

    return String.fromCharCode(shiftedCode);
}

module.exports = cipher;
