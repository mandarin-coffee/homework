import {sum} from "./sum";

describe ('sum', ()=>{
    it('sum a + b', () => {
        expect(sum(1+3)).toBe(4);
    });
})
