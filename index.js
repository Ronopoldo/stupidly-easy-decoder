// console.log(String.fromCharCode(60473899232000000000));
// console.log('р'.charCodeAt(0));

let input = prompt('Введите текст:');
let key = Number(prompt('Введите ключ'));

// let input = 'Тестовый текст';
// let key = 13;

function checkingPositive(input, outWord, key) {

    let outWordTest = '';
    for (let currentLetter = 0; currentLetter < outWord.length; currentLetter++) {
        outWordTest = outWordTest + String.fromCharCode(outWord.charCodeAt(currentLetter) - key);
    }

    if (outWordTest === input) {
        console.log('✅ Проверка текста в позитивном ключе прошла успешно! ✅');
    } else {
        console.log('Not Sucsessful ' + outWordTest + ' ' + input);
    }
}

function checkingNegative(input, outWord, key) {

    let outWordTest = '';
    for (let currentLetter = 0; currentLetter < outWord.length; currentLetter++) {
        outWordTest = outWordTest + String.fromCharCode(outWord.charCodeAt(currentLetter) + key);
    }

    if (outWordTest === input) {
        console.log('✅ Проверка текста в негативном ключе прошла успешно! ✅');
    } else {
        console.log('Not Sucsessful ' + outWordTest + ' ' + input);
    }
}

async function output(encodedText, key) {
    let originMsg = encodedText;
    let outWord = '';
    for (let currentLetter = 0; currentLetter < encodedText.length; currentLetter++) {
        outWord = outWord + String.fromCharCode(encodedText.charCodeAt(currentLetter) + key);
    }
    console.log(outWord);

    let outWordInverse = '';
    for (let currentLetter = 0; currentLetter < encodedText.length; currentLetter++) {
        outWordInverse = outWordInverse + String.fromCharCode(encodedText.charCodeAt(currentLetter) - key);
    }
    console.log(outWordInverse);
    checkingPositive(originMsg, outWord, key);
    checkingNegative(originMsg, outWordInverse, key);
    return [outWord, outWordInverse];
}

// async function getResult(input, key) {
//     let resultPlus = await output(input, key)[0]
//     let resultMinus = output(input, key)[1]
//     console.log(resultPlus)
//     console.log(resultMinus)
//
//     // console.log(output(input, key))
// }


output(input, key);