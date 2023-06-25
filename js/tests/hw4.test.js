import { userAge } from "../hw4";

describe ('userAge', () => {
    let prompt;
    let age;
    let user;
    let admin;

    beforeEach( ()=> {
        user = {'name': 'John',}

        prompt = jest.spyOn(window, 'prompt');
        age = prompt.mockReturnValueOnce(25);

        admin = Object.assign(user, {'role': 'Admin'})

        userAge(user)
    })

    it('add user age', () => {
        expect(user.age).toBe(25)
    })

    it('isset admin object', () => {
        expect (typeof admin).toBe('object');
    })
})