import {weekDay} from "../hw8";
import {minFromDay} from "../hw8";

describe ('weekDay', () => {
    let prompt;
    let days;

    beforeEach( ()=> {
        days = {
            0: 'Воскресенье',
            1: 'Понедельник',
            2: 'Вторник',
            3: 'Среда',
            4: 'Четверг',
            5: 'Пятница',
            6: 'Суббота'
        }

        prompt = jest.spyOn(window, 'prompt');
        prompt.mockReturnValueOnce('21.06.2023');
    })

    it('Запросить дату и вывести день недели', () => {
        expect(weekDay()).toBe('Среда')
    });
})

describe ('minFromDay', () => {
    let getCurrentDay = new Date();

    let getHours = getCurrentDay.getHours();
    let getMinutes = getCurrentDay.getMinutes();

    let res = getHours * 60 + getMinutes

    it('Return amount minutes', () => {
        expect(minFromDay()).toBe(res)
    });
})