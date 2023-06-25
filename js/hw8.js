export function weekDay () {
    let userPrompt = prompt('Введите дату в формате дд.мм.гггг')

    let days = {
        0: 'Воскресенье',
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота'
    }

    let array = userPrompt.split('.');
    let str = array.reverse().join('-');

    let date = new Date(str).getDay(); //день недели в виде числа

    for (let key in days) {
        if (Number(key) === date) {
            return days[key];
        }
    }
}

export function minFromDay () {
    let getCurrentDay = new Date();

    let getHours = getCurrentDay.getHours();
    let getMinutes = getCurrentDay.getMinutes();

    return getHours * 60 + getMinutes;
}