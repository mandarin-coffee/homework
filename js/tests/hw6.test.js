import {diff, isWord} from "../hw6";
import {expectedError} from "@babel/core/lib/errors/rewrite-stack-trace";

describe('diff', () => {
    it('Разница между большим и меньшим', () => {
        for (let i = 0; i < 5; i++) {
            let a = Math.floor( Math.random() * (100 - 1) ) + 1;
            let b = Math.floor( Math.random() * (100 - 1) ) + 1;

            if (a > b) {
                expect (diff(a, b)).toBe(a - b);
            } else {
                expect (diff(a, b)).toBe(b - a);
            }
        }
    })
})

describe('isWord', () => {
    it('Count words', () => {
        expect(isWord(`some`)).toBeTruthy();
        expect(isWord(`some text`)).toBeFalsy();
    })
})
