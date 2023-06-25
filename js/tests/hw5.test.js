import {arraySum} from "../hw5";
import {arrayNewFromOld} from "../hw5";


describe ('array', () => {
    it('Sum array', () => {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let res = 0;
        for (let i = 0; i < array.length; i++) {
            res += array[i];
        }

        expect(arraySum()).toBe(res)
    })
})

describe ('arrayNewFromOld', () => {
    it('Новый массив на базе старого умноженный на 2', () => {
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let res = [];
        for (let i = 0; i < array.length; i++) {
            res.push(array[i]*2);
        }

        expect(arrayNewFromOld()).toBe(typeof res)
    })
})
