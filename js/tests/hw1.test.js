import { sum } from "../hw1";

import { countSymbols } from "../hw1";

import { userSum } from "../hw1";
describe ('sum', () => {
    let a = Math.round ( Math.random() * (100, 999) );
    let b = Math.round ( Math.random() * (100, 999) );
    //let consoleLog;

    beforeEach ( () => {
        //consoleLog = jest.spyOn(console, 'log');
        jest.spyOn(console, 'log'); // console.log шпион на функции внутри
    })

    it('sum a + b', () => {
        expect(sum(a,b, 'plus')).toBe(a+b);
        //expect(consoleLog).toHaveBeenCalledWith(a+b);
        expect(console.log).toHaveBeenCalledWith(a+b);
    });

    it('sum a * b', () => {
        expect(sum(a,b, 'multiply')).toBe(a*b);
    });

    it('params a, b is number', () => {
        expect(typeof a).toBe('number');
        expect(typeof b).toBe('number');
    })
})

describe ('countSymbols', () => {
    it('sum length symbols a + b', () => {
        expect(countSymbols('coffee', 'bread')).toBe(11);
    })
})

describe ('userSum', () => {

    function randomNumber() {
        return Math.round ( Math.random() * (999 - 100)) + 100;
    }

    let prompt;

    let numberA = randomNumber();

    let array = String(numberA).split('');

    let res = 0;

    array.map(el => res + Number(el));

    beforeEach(() => {
        prompt = jest.spyOn(window, 'prompt');
    })

    it('sum a + b', () => {
        prompt.mockReturnValueOnce(numberA);
        expect(userSum()).toBe(`Сумма чисел = ${res}`);
    })

    it('sum a + c', () => {
        prompt.mockReturnValueOnce(11);
        expect(() => userSum()).toThrowError(`Введите 3-ех значное число`); //Для обработки ошибки функцию вызвать в обертке () => {}
    })

})
