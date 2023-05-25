export function sum (
    a = Math.round ( Math.random() * (100, 999) ),
    b = Math.round ( Math.random() * (100, 999) ),
    res = null ) {

    if (res === "plus") {
        console.log(a + b);
        return a + b;
    }

    if (res === 'multiply') {
        console.log(a * b);
        return a * b;
    }
}

export function countSymbols (a, b) {

    let aLength = a.length;
    let bLength = b.length;

    return aLength + bLength;
}

export function userSum () {

    let a = prompt('Введите число:');

    let b = prompt('Введите число:');

    if (a.toString().length >= 3 && b.toString().length >= 3) {
        let res = a.toString().length + b.toString().length;

        return `Количество символов = ${res}`;
    } else {
        throw 'Введите 3-ех значное число';
    }

}
