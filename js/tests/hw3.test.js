import { sumIntegerNumbers } from "../hw3";
import { multiplicationTable } from "../hw3";
describe ('sumIntegerNumbers', () => {
    it('Вывести сумму целых чисел', () => {
        expect (sumIntegerNumbers(50)).toBeTruthy();
    })
})

describe ('multiplicationTable', () => {
    it('Вывести таблицу умножения на 7', () => {
        expect (multiplicationTable(7)).toBeTruthy();
    })
})
