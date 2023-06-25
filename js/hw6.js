export function diff (a, b) {
    if (a > b) {
        return a - b;
    } else {
        return  b - a;
    }
}

export function isWord (string) {
    let strToArr = string.split(' ');
    //console.log(strToArr)
    if (strToArr.length === 1) {
        return true;
    } else {
        return false;
    }
}
