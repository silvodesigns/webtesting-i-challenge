const enhancer = require('./enhancer.js');
// test away!

describe("game enhancing system", () => {

    describe('repair item', () => {
        const item = {
            name: 'sword',
            durability: 10,
            enhancement: 10
        };
        
        it("is receiving an object", () => {
            expect(typeof(item)).toBe('object');
        })

        it("it is resoring durability to 100", () => {
            enhancer.repair(item);
            expect(item.durability).toBe(100);
        })

    });

});
