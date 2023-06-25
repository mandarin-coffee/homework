import { list } from "../hw7";

describe ('list', () => {
    let el;
    let input;

    beforeEach(() => {
        el = document.createElement('div');
        list(el);
        input = el.querySelector('input');
    })

    it('check props', () => {
        expect(input).toBeTruthy();//is not null
        expect(el.querySelector('button')).toBeTruthy();
        expect(el.querySelector('button').innerText).toBe('Введите текст');
        expect(el.querySelector('ul.history')).toBeTruthy();
    })

    it('clear button', ()=>{
        el.querySelector('input').innerText = '123';
        el.querySelector('button').click()

        expect(el.querySelector('input').innerHTML).toBe('');
    })

    it('add new el to list', ()=>{
        let input = el.querySelector('input').innerText = '123';
        el.querySelector('button').click()

        expect(el.querySelector('ul li').innerText).toBe(input.value);
    })

})
