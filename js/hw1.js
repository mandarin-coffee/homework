export function sum (a, b, res = null ) {

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

    if (a.toString().length >= 3) {
        let array = String(a).split('');

        let res = 0;

        array.map(el => res + Number(el));

        return `Сумма чисел = ${res}`;
    } else {
        throw "Введите 3-ех значное число";
    }

}
