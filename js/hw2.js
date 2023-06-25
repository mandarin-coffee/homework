export function biggerNumber (a, b) {

    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'числа равны';
    }

}

export function getMonth() {

    let a = prompt('Введите число от 1 до 12');

    switch (a) {
        case 1:
            return 'Январь';
        case 2:
            return 'Февраль';
        case 3:
            return 'Март';
        case 4:
            return 'Апрель';
        case 5:
            return 'Май';
        case 6:
            return 'Июнь';
        case 7:
            return 'Июль';
        case 8:
            return 'Август';
        case 9:
            return 'Сентябрь';
        case 10:
            return 'Октябрь';
        case 11:
            return 'Ноябрь';
        case 12:
            return 'Декабрь';
        default: return 'Вы ввели не число или слишком больше число'
    }
}
