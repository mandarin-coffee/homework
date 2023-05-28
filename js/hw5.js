export function arraySum () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res;
}

export function arrayNewFromOld () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(array[i]*2);
    }
    return typeof res;
}
