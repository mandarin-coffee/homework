import { biggerNumber } from "../hw2";

import { getMonth } from "../hw2";

describe (`biggerNumber`, () => {

    it('Вывести наибольшее число', () => {
        expect( biggerNumber(10, 12) ).toBe(12);
    });

    it('Вывести наибольшее число', () => {
        expect( biggerNumber(99, 56) ).toBe(99);
    });

    it('Вывести наибольшее число', () => {
        expect( biggerNumber(76, 64) ).toBe(76);
    });

})


describe (`getMonth`, () => {
    for (let i = 1; i < 13; i++) {
        //let randomNumber = Math.floor( Math.random() * (13 - 1) ) + 1;
        let prompt = jest.spyOn(window, "prompt");
        prompt.mockReturnValueOnce(i);

        let months = {
            '1': 'Январь',
            '2': 'Февраль',
            '3': 'Март',
            '4': 'Апрель',
            '5': 'Май',
            '6': 'Июнь',
            '7': 'Июль',
            '8': 'Август',
            '9': 'Сентябрь',
            '10': 'Октябрь',
            '11': 'Ноябрь',
            '12': 'Декабрь',
        }


        it('Вывод месяца по числу от 1 до 12', () => {
            expect(getMonth()).toBe(months[i])
        })
    }
})