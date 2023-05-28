import { userAge } from "../hw4";

import { admin } from "../hw4";

describe ('userAge', () => {

    let prompt = jest.spyOn(window, 'prompt');
    let age = prompt.mockReturnValueOnce(25);

    let user = {
        'name': 'John',
    }
    user.age = 25;

    it('add user age', () => {
        expect (userAge(user)).toBe(25)
    })

    it('isset admin object', () => {
        expect (admin(user)).toBe('object');
    })
})