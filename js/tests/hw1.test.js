import { sum } from "../hw1";

import { countSymbols } from "../hw1";

import { userSum } from "../hw1";
describe ('sum', () => {
    let a = Math.round ( Math.random() * (100, 999) );
    let b = Math.round ( Math.random() * (100, 999) );

    it('sum a + b', () => {
        expect(sum(1,3, 'plus')).toBe(4);
    });

    it('sum a * b', () => {
        expect(sum(1,3, 'multiply')).toBe(3);
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

    let prompt = jest.spyOn(window, 'prompt');

    let numberA = randomNumber();
    let numberB = randomNumber();

    let a = prompt.mockReturnValueOnce(numberA);
    let b = prompt.mockReturnValueOnce(numberB);

    it('sum a + b', () => {
        expect(userSum()).toBe(`Количество символов = 6`);
    })
})
