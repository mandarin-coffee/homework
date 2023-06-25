import {weekDay} from "../hw8";
import {userAge} from "../hw4";

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